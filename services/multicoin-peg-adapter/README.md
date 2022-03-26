# Multicoin Peg SLA

Forked from https://github.com/Stacktical/stacktical-dsla-developer-toolkit for the [Avalanche Summit](https://www.avalanchesummit.com/). This adds a [multicoin-peg-adapter](services/multicoin-peg-adapter) so you can get the SLI of any coin Peg. 

Our SLA example in `scripts.config.ts` verifies that the price of USDT stays above $0.95 for our defined period.

## Quick start

For a more indepth quick start please refer to the original documentation at https://readme.stacktical.com/developer-guide/developer-toolkit-1/quick-start. This quick start only lists what is needed to get the Peg proof of concept up and running.


First run `DEVELOP_IPFS_URI="https://ipfs.dsla.network" npm run par-peg-adapter` in a seperate tab.

setup the enviroment variables eg: 
```
const COVALENT_API_KEY = process.env.COVALENT_API_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const QUOTE_CURRENCY = process.env.QUOTE_CURRENCY;
const CHAIN_ID = process.env.CHAIN_ID;
```

After that run the following commands:

```
hh stacktical:restart-services --network develop
hh deploy --network develop --reset
hh stacktical:bootstrap --network develop
hh stacktical:deploy-sla --network develop --index 17
```

Then to request the SLI

```
hh stacktical:request-sli --network develop
```
