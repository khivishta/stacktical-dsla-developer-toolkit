require('dotenv').config();
import { providers, Contract } from 'ethers';
import axios from 'axios';
import moment from 'moment';
import { JsonRpcProvider } from '@ethersproject/providers';
import express from 'express';
import { SLAABI, MessengerABI } from './abis';

let web3Uri;
let provider: JsonRpcProvider;
const COVALENT_API_KEY = process.env.COVALENT_API_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const QUOTE_CURRENCY = process.env.QUOTE_CURRENCY;
const CHAIN_ID = process.env.CHAIN_ID;

const COVALENT_URL = `https://api.covalenthq.com/v1/pricing/historical_by_addresses_v2/${CHAIN_ID}/${QUOTE_CURRENCY}/`;

if (
  typeof process.env.COVALENT_API_KEY === 'undefined' ||
  typeof process.env.CONTRACT_ADDRESS === 'undefined'
) {
  throw 'non valid enviroments variables';
}

type SLAData = {
  serviceName: string;
  serviceDescription: string;
  serviceImage: string;
  serviceURL: string;
  serviceAddress: string;
  serviceTicker: string;
  periodType: number;
  messengerAddress: string;
};

type RequestData = {
  sla_address: string;
  network_name: string;
  sla_monitoring_start: number;
  sla_monitoring_end: number;
};

async function getSLAData(address): Promise<SLAData> {
  const slaContract = new Contract(address, SLAABI, provider);
  const ipfsCID = await slaContract.ipfsHash();
  console.log(`SLA IPFS url: ${process.env.DEVELOP_IPFS_URI}/ipfs/${ipfsCID}`);
  const periodType = await await slaContract.periodType();
  console.log('periodType', periodType);
  const messengerAddress = await slaContract.messengerAddress();
  const { data } = await axios.get(
    `${process.env.DEVELOP_IPFS_URI}/ipfs/${ipfsCID}`
  );
  return { ...data, periodType, messengerAddress };
}

/**
 * Function that uses Covalent to query the average coin price in the given period
 * @param start unix timestamp in seconds of the start of the period to query from
 * @param end unix timestamp in seconds of the end of the period to query from
 * @returns average price in that period
 */
async function getHistoricalPrice(start: number, end: number) {
  const start_string = moment.unix(start).format('YYYY-MM-DD');
  const end_string = moment.unix(end).format('YYYY-MM-DD');
  console.log('start date', start_string);
  console.log('end date', end_string);

  // https://api.covalenthq.com/v1/pricing/historical_by_addresses_v2/1/USD/0xdAC17F958D2ee523a2206206994597C13D831ec7/?quote-currency=USD&format=JSON&from=2021-01-01&to=2021-01-07&key=ckey_docs
  const url = `${COVALENT_URL}${CONTRACT_ADDRESS}`;
  const params = {
    'quote-currency': QUOTE_CURRENCY,
    format: 'JSON',
    from: start_string,
    to: end_string,
    key: COVALENT_API_KEY,
  };
  const results = axios.get(url, { params });
  console.log(results);

  let decimals = results[0].contract_decimals;
  let prices = results[0].prices;

  const sum = prices.reduce(
    (a, b) => Number(a.price) + Number(b.price) * decimals,
    0
  );
  const average = sum / prices.length;

  return average;
}

async function getSLI(requestData: RequestData) {
  const slaData = await getSLAData(requestData.sla_address);
  console.log('SLA Data:');
  console.log(slaData);

  const messenger = new Contract(
    slaData.messengerAddress,
    MessengerABI,
    provider
  );
  const precision = await messenger.messengerPrecision();
  console.log('precision', precision);

  const averagePrice = await getHistoricalPrice(
    requestData.sla_monitoring_start,
    requestData.sla_monitoring_end
  );

  console.log('averagePrice', averagePrice);

  const sli = averagePrice * precision;

  return sli;
}

const app = express();
app.use(express.json());

app.post('/', async (req, res) => {
  const { id, data } = req.body;
  console.log('Request Body:');
  console.log(req.body);
  const requestData = {
    sla_address: data.sla_address,
    network_name: data.network_name,
    sla_monitoring_start: data.sla_monitoring_start,
    sla_monitoring_end: data.sla_monitoring_end,
  };
  web3Uri = process.env[`${requestData.network_name.toUpperCase()}_URI`];

  provider = new providers.JsonRpcProvider(web3Uri);
  const result = await getSLI(requestData);
  console.log('result:', result);
  res.send({
    jobRunID: id,
    data: {
      result,
    },
  });
});

export default app;
