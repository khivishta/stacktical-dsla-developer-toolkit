import {
  appRoot,
  CONTRACT_NAMES,
  PERIOD_TYPE,
  SLO_TYPE,
  USE_CASES,
} from './constants';
import { ScriptsConfiguration } from './types';
import * as fs from 'fs';

const SEMessengerSpec = JSON.parse(
  // @ts-ignore
  fs.readFileSync(
    `${appRoot.path}/contracts/messengers/${USE_CASES.STAKING_EFFICIENCY}/use-case-spec.json`
  )
);
const SENetworkNames = SEMessengerSpec.ipfsData.serviceTicker.values;

export const scripts: ScriptsConfiguration = {
  deploy_sla: [
    // INDEX 0 | Should be BREACHED
    {
      sloValue: 100, // Breached as SL0 > SLi is false
      sloType: SLO_TYPE.GreaterThan,
      whitelisted: false,
      periodType: PERIOD_TYPE.WEEKLY,
      messengerContract: CONTRACT_NAMES.BaseMessenger, // BaseMessenger returns SLIs (0~100)
      initialPeriodId: 0,
      finalPeriodId: 5,
      extraData: [],
      initialTokenSupply: '10000000',
      initialTokenSupplyDivisor: 100,
      deployerStakeTimes: 100,
      notDeployerStakeTimes: 1,
      leverage: 20,
      serviceMetadata: {
        serviceName: 'P-OPS',
        serviceDescription: 'Official bDSLA Beta Partner.',
        serviceImage:
          'https://storage.googleapis.com/bdsla-incentivized-beta/validators/chainode.svg',
        serviceURL: 'https://bdslaToken.network',
        serviceAddress: 'one1kf42rl6yg2avkjsu34ch2jn8yjs64ycn4n9wdj',
        serviceTicker: SENetworkNames[0],
      },
    },
    // INDEX 1 | Should be HONORED
    {
      sloValue: 0, // Honored SLO > SLI of 0 is true
      sloType: SLO_TYPE.GreaterThan,
      whitelisted: false,
      periodType: PERIOD_TYPE.WEEKLY,
      messengerContract: CONTRACT_NAMES.BaseMessenger,
      initialPeriodId: 0,
      finalPeriodId: 5,
      extraData: [],
      initialTokenSupply: '10000000',
      initialTokenSupplyDivisor: 100,
      deployerStakeTimes: 100,
      notDeployerStakeTimes: 1,
      leverage: 20,
      serviceMetadata: {
        serviceName: 'P-OPS',
        serviceDescription: 'Official bDSLA Beta Partner.',
        serviceImage:
          'https://storage.googleapis.com/bdsla-incentivized-beta/validators/chainode.svg',
        serviceURL: 'https://bdslaToken.network',
        serviceAddress: 'one1kf42rl6yg2avkjsu34ch2jn8yjs64ycn4n9wdj',
        serviceTicker: SENetworkNames[0],
      },
    },
    // INDEX 2 | Should be HONORED
    {
      sloValue: 50, // SLI of 50 >= SLO of 50 is true
      sloType: SLO_TYPE.GreaterOrEqualTo,
      whitelisted: false,
      periodType: PERIOD_TYPE.WEEKLY,
      messengerContract: CONTRACT_NAMES.BaseMessenger,
      initialPeriodId: 0,
      finalPeriodId: 5,
      extraData: [],
      initialTokenSupply: '10000000',
      initialTokenSupplyDivisor: 100,
      deployerStakeTimes: 100,
      notDeployerStakeTimes: 1,
      leverage: 50,
      serviceMetadata: {
        serviceName: 'P-OPS',
        serviceDescription: 'Official bDSLA Beta Partner.',
        serviceImage:
          'https://storage.googleapis.com/bdsla-incentivized-beta/validators/chainode.svg',
        serviceURL: 'https://bdslaToken.network',
        serviceAddress: 'one1kf42rl6yg2avkjsu34ch2jn8yjs64ycn4n9wdj',
        serviceTicker: SENetworkNames[0],
      },
    },
    // INDEX 3 | Should be BREACHED
    {
      sloValue: 60, // SLI of 50 >= SLO of 60 is false
      sloType: SLO_TYPE.GreaterOrEqualTo,
      whitelisted: false,
      periodType: PERIOD_TYPE.WEEKLY,
      messengerContract: CONTRACT_NAMES.BaseMessenger,
      initialPeriodId: 0,
      finalPeriodId: 5,
      extraData: [],
      initialTokenSupply: '10000000',
      initialTokenSupplyDivisor: 100,
      deployerStakeTimes: 100,
      notDeployerStakeTimes: 1,
      leverage: 50,
      serviceMetadata: {
        serviceName: 'P-OPS',
        serviceDescription: 'Official bDSLA Beta Partner.',
        serviceImage:
          'https://storage.googleapis.com/bdsla-incentivized-beta/validators/chainode.svg',
        serviceURL: 'https://bdslaToken.network',
        serviceAddress: 'one1kf42rl6yg2avkjsu34ch2jn8yjs64ycn4n9wdj',
        serviceTicker: SENetworkNames[0],
      },
    },
    // INDEX 4 | Should be HONORED
    {
      sloValue: 100, // Honored as SLI 50 < SLO 100 is true
      sloType: SLO_TYPE.SmallerThan,
      whitelisted: false,
      periodType: PERIOD_TYPE.WEEKLY,
      messengerContract: CONTRACT_NAMES.BaseMessenger, // BaseMessenger returns SLIs (0~100)
      initialPeriodId: 0,
      finalPeriodId: 5,
      extraData: [],
      initialTokenSupply: '10000000',
      initialTokenSupplyDivisor: 100,
      deployerStakeTimes: 100,
      notDeployerStakeTimes: 1,
      leverage: 20,
      serviceMetadata: {
        serviceName: 'P-OPS',
        serviceDescription: 'Official bDSLA Beta Partner.',
        serviceImage:
          'https://storage.googleapis.com/bdsla-incentivized-beta/validators/chainode.svg',
        serviceURL: 'https://bdslaToken.network',
        serviceAddress: 'one1kf42rl6yg2avkjsu34ch2jn8yjs64ycn4n9wdj',
        serviceTicker: SENetworkNames[0],
      },
    },
    // INDEX 5 | Should be BREACHED
    {
      sloValue: 10, // Breached as SLI 50 < SLO 10 is false
      sloType: SLO_TYPE.SmallerThan,
      whitelisted: false,
      periodType: PERIOD_TYPE.WEEKLY,
      messengerContract: CONTRACT_NAMES.BaseMessenger, // BaseMessenger returns SLIs (0~100)
      initialPeriodId: 0,
      finalPeriodId: 5,
      extraData: [],
      initialTokenSupply: '10000000',
      initialTokenSupplyDivisor: 100,
      deployerStakeTimes: 100,
      notDeployerStakeTimes: 1,
      leverage: 20,
      serviceMetadata: {
        serviceName: 'P-OPS',
        serviceDescription: 'Official bDSLA Beta Partner.',
        serviceImage:
          'https://storage.googleapis.com/bdsla-incentivized-beta/validators/chainode.svg',
        serviceURL: 'https://bdslaToken.network',
        serviceAddress: 'one1kf42rl6yg2avkjsu34ch2jn8yjs64ycn4n9wdj',
        serviceTicker: SENetworkNames[0],
      },
    },
    // INDEX 6 | Should be HONORED
    {
      sloValue: 60, // Honored as SLI 50 < SLO 60 is true
      sloType: SLO_TYPE.SmallerOrEqualTo,
      whitelisted: false,
      periodType: PERIOD_TYPE.WEEKLY,
      messengerContract: CONTRACT_NAMES.BaseMessenger, // BaseMessenger returns SLIs (0~100)
      initialPeriodId: 0,
      finalPeriodId: 5,
      extraData: [],
      initialTokenSupply: '10000000',
      initialTokenSupplyDivisor: 100,
      deployerStakeTimes: 100,
      notDeployerStakeTimes: 1,
      leverage: 20,
      serviceMetadata: {
        serviceName: 'P-OPS',
        serviceDescription: 'Official bDSLA Beta Partner.',
        serviceImage:
          'https://storage.googleapis.com/bdsla-incentivized-beta/validators/chainode.svg',
        serviceURL: 'https://bdslaToken.network',
        serviceAddress: 'one1kf42rl6yg2avkjsu34ch2jn8yjs64ycn4n9wdj',
        serviceTicker: SENetworkNames[0],
      },
    },
    // INDEX 7 | Should be BREACHED
    {
      sloValue: 40, // Breached as SLI 50 < SLO 60 is false
      sloType: SLO_TYPE.SmallerOrEqualTo,
      whitelisted: false,
      periodType: PERIOD_TYPE.WEEKLY,
      messengerContract: CONTRACT_NAMES.BaseMessenger, // BaseMessenger returns SLIs (0~100)
      initialPeriodId: 0,
      finalPeriodId: 5,
      extraData: [],
      initialTokenSupply: '10000000',
      initialTokenSupplyDivisor: 100,
      deployerStakeTimes: 100,
      notDeployerStakeTimes: 1,
      leverage: 20,
      serviceMetadata: {
        serviceName: 'P-OPS',
        serviceDescription: 'Official bDSLA Beta Partner.',
        serviceImage:
          'https://storage.googleapis.com/bdsla-incentivized-beta/validators/chainode.svg',
        serviceURL: 'https://bdslaToken.network',
        serviceAddress: 'one1kf42rl6yg2avkjsu34ch2jn8yjs64ycn4n9wdj',
        serviceTicker: SENetworkNames[0],
      },
    },
    // INDEX 8 | Should be HONORED
    {
      sloValue: 50, // Breached as SLI 50 = SLO 50 is true
      sloType: SLO_TYPE.EqualTo,
      whitelisted: false,
      periodType: PERIOD_TYPE.WEEKLY,
      messengerContract: CONTRACT_NAMES.BaseMessenger, // BaseMessenger returns SLIs (0~100)
      initialPeriodId: 0,
      finalPeriodId: 5,
      extraData: [],
      initialTokenSupply: '10000000',
      initialTokenSupplyDivisor: 100,
      deployerStakeTimes: 100,
      notDeployerStakeTimes: 1,
      leverage: 20,
      serviceMetadata: {
        serviceName: 'P-OPS',
        serviceDescription: 'Official bDSLA Beta Partner.',
        serviceImage:
          'https://storage.googleapis.com/bdsla-incentivized-beta/validators/chainode.svg',
        serviceURL: 'https://bdslaToken.network',
        serviceAddress: 'one1kf42rl6yg2avkjsu34ch2jn8yjs64ycn4n9wdj',
        serviceTicker: SENetworkNames[0],
      },
    },
    // INDEX 9 | Should be BREACHED
    {
      sloValue: 51, // Breached as SLI 50 = SLO 51 is false
      sloType: SLO_TYPE.EqualTo,
      whitelisted: false,
      periodType: PERIOD_TYPE.WEEKLY,
      messengerContract: CONTRACT_NAMES.BaseMessenger, // BaseMessenger returns SLIs (0~100)
      initialPeriodId: 0,
      finalPeriodId: 5,
      extraData: [],
      initialTokenSupply: '10000000',
      initialTokenSupplyDivisor: 100,
      deployerStakeTimes: 100,
      notDeployerStakeTimes: 1,
      leverage: 20,
      serviceMetadata: {
        serviceName: 'P-OPS',
        serviceDescription: 'Official bDSLA Beta Partner.',
        serviceImage:
          'https://storage.googleapis.com/bdsla-incentivized-beta/validators/chainode.svg',
        serviceURL: 'https://bdslaToken.network',
        serviceAddress: 'one1kf42rl6yg2avkjsu34ch2jn8yjs64ycn4n9wdj',
        serviceTicker: SENetworkNames[0],
      },
    },
    // INDEX 10 | Should be HONORED
    {
      sloValue: 51, // Breached as SLI 50 != SLO 51 is true
      sloType: SLO_TYPE.NotEqualTo,
      whitelisted: false,
      periodType: PERIOD_TYPE.WEEKLY,
      messengerContract: CONTRACT_NAMES.BaseMessenger, // BaseMessenger returns SLIs (0~100)
      initialPeriodId: 0,
      finalPeriodId: 5,
      extraData: [],
      initialTokenSupply: '10000000',
      initialTokenSupplyDivisor: 100,
      deployerStakeTimes: 100,
      notDeployerStakeTimes: 1,
      leverage: 20,
      serviceMetadata: {
        serviceName: 'P-OPS',
        serviceDescription: 'Official bDSLA Beta Partner.',
        serviceImage:
          'https://storage.googleapis.com/bdsla-incentivized-beta/validators/chainode.svg',
        serviceURL: 'https://bdslaToken.network',
        serviceAddress: 'one1kf42rl6yg2avkjsu34ch2jn8yjs64ycn4n9wdj',
        serviceTicker: SENetworkNames[0],
      },
    },
    // INDEX 11 | Should be BREACHED
    {
      sloValue: 50, // Breached as SLI 50 != SLO 50 is false
      sloType: SLO_TYPE.NotEqualTo,
      whitelisted: false,
      periodType: PERIOD_TYPE.WEEKLY,
      messengerContract: CONTRACT_NAMES.BaseMessenger, // BaseMessenger returns SLIs (0~100)
      initialPeriodId: 0,
      finalPeriodId: 5,
      extraData: [],
      initialTokenSupply: '10000000',
      initialTokenSupplyDivisor: 100,
      deployerStakeTimes: 100,
      notDeployerStakeTimes: 1,
      leverage: 20,
      serviceMetadata: {
        serviceName: 'P-OPS',
        serviceDescription: 'Official bDSLA Beta Partner.',
        serviceImage:
          'https://storage.googleapis.com/bdsla-incentivized-beta/validators/chainode.svg',
        serviceURL: 'https://bdslaToken.network',
        serviceAddress: 'one1kf42rl6yg2avkjsu34ch2jn8yjs64ycn4n9wdj',
        serviceTicker: SENetworkNames[0],
      },
    },
    // INDEX 12
    {
      sloValue: 0.99,
      sloType: SLO_TYPE.SmallerThan, // You want less inflation :)
      whitelisted: false,
      periodType: PERIOD_TYPE.MONTHLY,
      messengerContract: CONTRACT_NAMES.CPIMessenger,
      initialPeriodId: 0,
      finalPeriodId: 11,
      extraData: [],
      initialTokenSupply: '10000000',
      initialTokenSupplyDivisor: 100,
      deployerStakeTimes: 100,
      notDeployerStakeTimes: 2,
      leverage: 50, // 100 / 50 = 2% premium
      serviceMetadata: {
        serviceName: 'Federal Reserve',
        serviceDescription:
          'The U.S. Federal Reserve (FED) inflation-driven monetary policy updates.',
        serviceImage: 'https://via.placeholder.com/1200x600',
        serviceURL: 'https://www.federalreserve.gov/',
        serviceAddress: '0x0000000000000000000000000000000000000000',
        serviceTicker: 'CPI',
      },
    },
    // INDEX 13
    {
      sloValue: 99,
      sloType: SLO_TYPE.SmallerThan, // You want less inflation :)
      whitelisted: false,
      periodType: PERIOD_TYPE.MONTHLY,
      messengerContract: CONTRACT_NAMES.CPIMessenger,
      initialPeriodId: 0,
      finalPeriodId: 11,
      extraData: [],
      initialTokenSupply: '10000000',
      initialTokenSupplyDivisor: 100,
      deployerStakeTimes: 100,
      notDeployerStakeTimes: 2,
      leverage: 50, // 100 / 50 = 2% premium
      serviceMetadata: {
        serviceName: 'Federal Reserve',
        serviceDescription:
          'The U.S. Federal Reserve (FED) inflation-driven monetary policy updates.',
        serviceImage: 'https://via.placeholder.com/1200x600',
        serviceURL: 'https://www.federalreserve.gov/',
        serviceAddress: '0x0000000000000000000000000000000000000000',
        serviceTicker: 'CPI',
      },
    },
    // INDEX 14
    {
      sloValue: 9,
      sloType: SLO_TYPE.SmallerOrEqualTo, // You want less inflation :)
      whitelisted: false,
      periodType: PERIOD_TYPE.MONTHLY,
      messengerContract: CONTRACT_NAMES.CPIMessenger,
      initialPeriodId: 0,
      finalPeriodId: 11,
      extraData: [],
      initialTokenSupply: '10000000',
      initialTokenSupplyDivisor: 100,
      deployerStakeTimes: 100,
      notDeployerStakeTimes: 2,
      leverage: 50, // 100 / 50 = 2% premium
      serviceMetadata: {
        serviceName: 'Federal Reserve',
        serviceDescription:
          'The U.S. Federal Reserve (FED) inflation-driven monetary policy updates.',
        serviceImage: 'https://via.placeholder.com/1200x600',
        serviceURL: 'https://www.federalreserve.gov/',
        serviceAddress: '0x0000000000000000000000000000000000000000',
        serviceTicker: 'CPI',
      },
    },
    // INDEX 15
    {
      sloValue: 9,
      sloType: SLO_TYPE.GreaterOrEqualTo, // You want less inflation :)
      whitelisted: false,
      periodType: PERIOD_TYPE.MONTHLY,
      messengerContract: CONTRACT_NAMES.CPIMessenger,
      initialPeriodId: 0,
      finalPeriodId: 11,
      extraData: [],
      initialTokenSupply: '10000000',
      initialTokenSupplyDivisor: 100,
      deployerStakeTimes: 100,
      notDeployerStakeTimes: 2,
      leverage: 50, // 100 / 50 = 2% premium
      serviceMetadata: {
        serviceName: 'Federal Reserve',
        serviceDescription:
          'The U.S. Federal Reserve (FED) inflation-driven monetary policy updates.',
        serviceImage: 'https://via.placeholder.com/1200x600',
        serviceURL: 'https://www.federalreserve.gov/',
        serviceAddress: '0x0000000000000000000000000000000000000000',
        serviceTicker: 'CPI',
      },
    },
    // INDEX 16
    {
      sloValue: 0.1,
      sloType: SLO_TYPE.GreaterOrEqualTo, // You want less inflation :)
      whitelisted: false,
      periodType: PERIOD_TYPE.MONTHLY,
      messengerContract: CONTRACT_NAMES.CPIMessenger,
      initialPeriodId: 0,
      finalPeriodId: 11,
      extraData: [],
      initialTokenSupply: '10000000',
      initialTokenSupplyDivisor: 100,
      deployerStakeTimes: 100,
      notDeployerStakeTimes: 2,
      leverage: 50, // 100 / 50 = 2% premium
      serviceMetadata: {
        serviceName: 'Federal Reserve',
        serviceDescription:
          'The U.S. Federal Reserve (FED) inflation-driven monetary policy updates.',
        serviceImage: 'https://via.placeholder.com/1200x600',
        serviceURL: 'https://www.federalreserve.gov/',
        serviceAddress: '0x0000000000000000000000000000000000000000',
        serviceTicker: 'CPI',
      },
    },
    // INDEX 17
    {
      // This SLA agrees that the price of a coin must be greater than or equal to 99% of an base currency
      sloValue: 0.97,
      sloType: SLO_TYPE.GreaterOrEqualTo,
      whitelisted: false,
      periodType: PERIOD_TYPE.MONTHLY,
      messengerContract: CONTRACT_NAMES.PPMessenger,
      initialPeriodId: 1,
      finalPeriodId: 5,
      extraData: [],
      initialTokenSupply: '10000000',
      initialTokenSupplyDivisor: 100,
      deployerStakeTimes: 100,
      notDeployerStakeTimes: 2,
      leverage: 50, // 100 / 50 = 2% premium
      serviceMetadata: {
        serviceName: 'P-OPS',
        serviceDescription: 'Official bDSLA Beta Partner.',
        serviceImage:
          'https://storage.googleapis.com/bdsla-incentivized-beta/validators/chainode.svg',
        serviceURL: 'https://bdslaToken.network',
        serviceAddress: 'one1kf42rl6yg2avkjsu34ch2jn8yjs64ycn4n9wdj',
        serviceTicker: SENetworkNames[0],
      },
    },
  ],
};
