/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SEAMessenger, SEAMessengerInterface } from "../SEAMessenger";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_messengerChainlinkOracle",
        type: "address",
      },
      {
        internalType: "address",
        name: "_messengerChainlinkToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_feeMultiplier",
        type: "uint256",
      },
      {
        internalType: "contract PeriodRegistry",
        name: "_periodRegistry",
        type: "address",
      },
      {
        internalType: "contract StakeRegistry",
        name: "_stakeRegistry",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_networkName",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "ChainlinkRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "jobId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "JobIdModified",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "slaAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "periodId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "chainlinkResponse",
        type: "bytes32",
      },
    ],
    name: "SLIReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "requestsCounter",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
    ],
    name: "SLIRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "TestEvent",
    type: "event",
  },
  {
    inputs: [],
    name: "fee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_requestId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_chainlinkResponse",
        type: "uint256",
      },
    ],
    name: "fulfillSLI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fulfillsCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "jobId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "messengerPrecision",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "networkName",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "requestIdToSLIRequest",
    outputs: [
      {
        internalType: "address",
        name: "slaAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "periodId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_periodId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_slaAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_messengerOwnerApproval",
        type: "bool",
      },
      {
        internalType: "address",
        name: "_callerAddress",
        type: "address",
      },
    ],
    name: "requestSLI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "requests",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "requestsCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_slaAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_periodId",
        type: "uint256",
      },
    ],
    name: "retryRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_newJobId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_feeMultiplier",
        type: "uint256",
      },
    ],
    name: "setChainlinkJobID",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setSLARegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "slaRegistryAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405260016004556010805460ff60a01b191690553480156200002357600080fd5b5060405162001e3038038062001e30833981016040819052620000469162000142565b60006200005b6001600160e01b036200011c16565b600680546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506001600755620000c2856001600160e01b036200012016565b60609590951b6001600160601b03191660805267016345785d8a000092909202600c55600f80546001600160a01b03199081166001600160a01b0393841617909155601080549091169190921617905550601155620001d6565b3390565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b60008060008060008060c087890312156200015b578182fd5b86516200016881620001bd565b60208801519096506200017b81620001bd565b6040880151606089015191965094506200019581620001bd565b6080880151909350620001a881620001bd565b8092505060a087015190509295509295509295565b6001600160a01b0381168114620001d357600080fd5b50565b60805160601c611c37620001f96000398061036c528061079a5250611c376000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063a50c5425116100a2578063c9b0cb2211610071578063c9b0cb22146101ed578063ddca3f43146101f5578063e450f061146101fd578063f2fde38b14610210578063f38815891461022357610116565b8063a50c5425146101a9578063ae401eb9146101b1578063bc0bfc00146101d2578063c2939d97146101e557610116565b8063715018a6116100e9578063715018a61461016b5780637dc0d1d01461017357806381d12c581461017b5780638da5cb5b1461018e57806397a821921461019657610116565b8063107bf28c1461011b578063292733bf14610139578063663c22691461014e5780636e71890d14610156575b600080fd5b61012361022b565b604051610130919061185d565b60405180910390f35b61014c61014736600461157f565b610231565b005b6101236102cc565b61015e6102d2565b6040516101309190611774565b61014c6102e1565b61015e61036a565b610123610189366004611567565b61038e565b61015e6103ac565b61014c6101a436600461165a565b6103bb565b610123610893565b6101c46101bf366004611567565b610899565b6040516101309291906117ac565b61014c6101e036600461157f565b6108be565b610123610a52565b610123610a58565b610123610a5e565b61014c61020b366004611521565b610a64565b61014c61021e366004611506565b610beb565b61014c610cac565b60115481565b610239610ce9565b6001600160a01b031661024a6103ac565b6001600160a01b0316146102795760405162461bcd60e51b815260040161027090611a7a565b60405180910390fd5b600b82905567016345785d8a00008102600c81905560405133917f8e7e22d2820965fa1a8fa3ad76db76127e2f1baaf65f50c4e267f28b2254f7cb916102c0918691611866565b60405180910390a25050565b600d5490565b600a546001600160a01b031690565b6102e9610ce9565b6001600160a01b03166102fa6103ac565b6001600160a01b0316146103205760405162461bcd60e51b815260040161027090611a7a565b6006546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600680546001600160a01b0319169055565b7f000000000000000000000000000000000000000000000000000000000000000090565b6009818154811061039b57fe5b600091825260209091200154905081565b6006546001600160a01b031690565b601054600160a01b900460ff166103f657600a546001600160a01b031633146103f65760405162461bcd60e51b815260040161027090611a39565b600260075414156104195760405162461bcd60e51b815260040161027090611b78565b6002600755600b5461043d5760405162461bcd60e51b81526004016102709061189f565b8282156104775761047261044f6103ac565b30600c5461045b610ced565b6001600160a01b031692919063ffffffff610cfc16565b610487565b6104878230600c5461045b610ced565b61048f611489565b600b546104a39030622f02ff60ea1b610d5a565b9050600080600f60009054906101000a90046001600160a01b03166001600160a01b031663ffa61235856001600160a01b03166346e0fbae6040518163ffffffff1660e01b815260040160206040518083038186803b15801561050557600080fd5b505afa158015610519573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053d91906115a0565b8a6040518363ffffffff1660e01b815260040161055b929190611874565b604080518083038186803b15801561057257600080fd5b505afa158015610586573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105aa91906116ac565b91509150610677604051806040016040528060148152602001731cdb1857db5bdb9a5d1bdc9a5b99d7dcdd185c9d60621b81525073__$a50a81560717ba31a37cba6af2d185101e$__63fc966d45856040518263ffffffff1660e01b8152600401610615919061185d565b60006040518083038186803b15801561062d57600080fd5b505af4158015610641573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261066991908101906115bf565b85919063ffffffff610d8716565b60408051808201825260128152711cdb1857db5bdb9a5d1bdc9a5b99d7d95b9960721b6020820152905163fc966d4560e01b81526106da919073__$a50a81560717ba31a37cba6af2d185101e$__9063fc966d459061061590869060040161185d565b604080518082018252600b81526a736c615f6164647265737360a81b60208201529051635e57966d60e01b8152610736919073__$a50a81560717ba31a37cba6af2d185101e$__90635e57966d90610615908c90600401611774565b604080518082018252600c81526b6e6574776f726b5f6e616d6560a01b60208201526011549151631de1646d60e31b81526107939273__$a50a81560717ba31a37cba6af2d185101e$__9163ef0b2368916106159160040161185d565b60006107c27f000000000000000000000000000000000000000000000000000000000000000085600c54610db6565b6009805460018082019092557f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af018290556040805180820182526001600160a01b038c8116825260208083018f81526000878152600890925290849020925183546001600160a01b0319169083161783555191840191909155600d80549093019283905590519293508816917feab5eb77e722078f3fab7eb6a77c74f7001181e1e3a74d51b7b5747ee1b31cb99161087b918590611866565b60405180910390a25050600160075550505050505050565b600e5490565b600860205260009081526040902080546001909101546001600160a01b039091169082565b600260075414156108e15760405162461bcd60e51b815260040161027090611b78565b600260075560008281526005602052604090205482906001600160a01b0316331461091e5760405162461bcd60e51b815260040161027090611ae6565b60008181526005602052604080822080546001600160a01b03191690555182917f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a91a26109696114be565b506000838152600860209081526040918290208251808401845281546001600160a01b0316808252600190920154928101839052925186927f56514ef6e1ffd0f970ebf32dc181e476384e6e53a8351719040b4030318a933b916109cf91908890611866565b60405180910390a3600e8054600101905580516020820151604051636bd2e21160e11b81526001600160a01b039092169163d7a5c42291610a1591879190600401611866565b600060405180830381600087803b158015610a2f57600080fd5b505af1158015610a43573d6000803e3d6000fd5b50506001600755505050505050565b600b5490565b6103e890565b600c5490565b6010805460ff60a01b1916600160a01b179081905560405163ab9a81a560e01b81526001600160a01b039091169063ab9a81a590610aa890859085906004016117ac565b60206040518083038186803b158015610ac057600080fd5b505afa158015610ad4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af8919061154b565b610b145760405162461bcd60e51b81526004016102709061194d565b6040516320c876ef60e11b815282906000906001600160a01b03831690634190edde90610b4590869060040161185d565b60606040518083038186803b158015610b5d57600080fd5b505afa158015610b71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9591906116cf565b925060009150610ba29050565b816002811115610bae57fe5b14610bcb5760405162461bcd60e51b815260040161027090611984565b610bd883856000336103bb565b50506010805460ff60a01b191690555050565b610bf3610ce9565b6001600160a01b0316610c046103ac565b6001600160a01b031614610c2a5760405162461bcd60e51b815260040161027090611a7a565b6001600160a01b038116610c505760405162461bcd60e51b8152600401610270906118c4565b6006546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600680546001600160a01b0319166001600160a01b0392909216919091179055565b600a546001600160a01b031615610cd55760405162461bcd60e51b8152600401610270906119f1565b600a80546001600160a01b03191633179055565b3390565b6002546001600160a01b031690565b610d54846323b872dd60e01b858585604051602401610d1d93929190611788565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610ef5565b50505050565b610d62611489565b610d6a611489565b610d7c8186868663ffffffff610f8416565b9150505b9392505050565b6080830151610d9c908363ffffffff610fc116565b6080830151610db1908263ffffffff610fc116565b505050565b600030600454604051602001610dcd929190611752565b60408051808303601f19018152918152815160209283012060045460608701526000818152600590935281832080546001600160a01b0319166001600160a01b038916179055905190925082917fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af991a26002546001600160a01b0316634000aea08584610e5987610fde565b6040518463ffffffff1660e01b8152600401610e779392919061182d565b602060405180830381600087803b158015610e9157600080fd5b505af1158015610ea5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec9919061154b565b610ee55760405162461bcd60e51b81526004016102709061190a565b6004805460010190559392505050565b6060610f4a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661105a9092919063ffffffff16565b805190915015610db15780806020019051810190610f68919061154b565b610db15760405162461bcd60e51b815260040161027090611b2e565b610f8c611489565b610f9c8560800151610100611071565b50509183526001600160a01b031660208301526001600160e01b031916604082015290565b610fce82600383516110b1565b610db1828263ffffffff6111bb16565b6060634042994660e01b600080846000015185602001518660400151876060015160018960800151600001516040516024016110219897969594939291906117c5565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091529050919050565b606061106984846000856111d5565b949350505050565b6110796114d5565b602082061561108e5760208206602003820191505b506020808301829052604080518085526000815283019091019052815b92915050565b601781116110d8576110d28360e0600585901b16831763ffffffff61129616565b50610db1565b60ff811161110e576110fb836018611fe0600586901b161763ffffffff61129616565b506110d28382600163ffffffff6112ae16565b61ffff811161114557611132836019611fe0600586901b161763ffffffff61129616565b506110d28382600263ffffffff6112ae16565b63ffffffff811161117e5761116b83601a611fe0600586901b161763ffffffff61129616565b506110d28382600463ffffffff6112ae16565b67ffffffffffffffff8111610db1576111a883601b611fe0600586901b161763ffffffff61129616565b50610d548382600863ffffffff6112ae16565b6111c36114d5565b610d80838460000151518485516112c7565b6060824710156111f75760405162461bcd60e51b8152600401610270906119ab565b61120085611373565b61121c5760405162461bcd60e51b815260040161027090611aaf565b60006060866001600160a01b031685876040516112399190611736565b60006040518083038185875af1925050503d8060008114611276576040519150601f19603f3d011682016040523d82523d6000602084013e61127b565b606091505b509150915061128b828286611379565b979650505050505050565b61129e6114d5565b610d8083846000015151846113b2565b6112b66114d5565b6110698485600001515185856113fd565b6112cf6114d5565b82518211156112dd57600080fd5b8460200151828501111561130757611307856112ff876020015187860161145b565b600202611472565b6000808651805187602083010193508088870111156113265787860182525b505050602084015b6020841061134d5780518252601f19909301926020918201910161132e565b51815160001960208690036101000a019081169019919091161790525083949350505050565b3b151590565b60608315611388575081610d80565b8251156113985782518084602001fd5b8160405162461bcd60e51b8152600401610270919061188c565b6113ba6114d5565b836020015183106113d6576113d6848560200151600202611472565b8351805160208583010184815350808514156113f3576001810182525b5093949350505050565b6114056114d5565b846020015184830111156114225761142285858401600202611472565b60006001836101000a0390508551838682010185831982511617815250805184870111156114505783860181525b509495945050505050565b60008183111561146c5750816110ab565b50919050565b815161147e8383611071565b50610d5483826111bb565b6040805160a0810182526000808252602082018190529181018290526060810191909152608081016114b96114d5565b905290565b604080518082019091526000808252602082015290565b604051806040016040528060608152602001600081525090565b80356001600160a01b03811681146110ab57600080fd5b600060208284031215611517578081fd5b610d8083836114ef565b60008060408385031215611533578081fd5b61153d84846114ef565b946020939093013593505050565b60006020828403121561155c578081fd5b8151610d8081611bf3565b600060208284031215611578578081fd5b5035919050565b60008060408385031215611591578182fd5b50508035926020909101359150565b6000602082840312156115b1578081fd5b815160068110610d80578182fd5b6000602082840312156115d0578081fd5b815167ffffffffffffffff808211156115e7578283fd5b81840185601f8201126115f8578384fd5b8051925081831115611608578384fd5b604051601f8401601f191681016020018381118282101715611628578586fd5b60405283815281840160200187101561163f578485fd5b611650846020830160208501611baf565b9695505050505050565b6000806000806080858703121561166f578182fd5b84359350602085013561168181611bdb565b9250604085013561169181611bf3565b915060608501356116a181611bdb565b939692955090935050565b600080604083850312156116be578182fd5b505080516020909101519092909150565b6000806000606084860312156116e3578283fd5b83519250602084015191506040840151600381106116ff578182fd5b809150509250925092565b60008151808452611722816020860160208601611baf565b601f01601f19169290920160200192915050565b60008251611748818460208701611baf565b9190910192915050565b60609290921b6bffffffffffffffffffffffff19168252601482015260340190565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0389811682526020820189905260408201889052861660608201526001600160e01b03198516608082015260a0810184905260c0810183905261010060e0820181905260009061181e8382018561170a565b9b9a5050505050505050505050565b600060018060a01b038516825283602083015260606040830152611854606083018461170a565b95945050505050565b90815260200190565b918252602082015260400190565b604081016006841061188257fe5b9281526020015290565b600060208252610d80602083018461170a565b6020808252600b908201526a5f6a6f624920656d70747960a81b604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526023908201527f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f7261604082015262636c6560e81b606082015260800190565b6020808252601b908201527f5374616b6552656769737472793a206e6f742076657269666965640000000000604082015260600190565b6020808252600d908201526c14d3104e881d995c9a599a5959609a1b604082015260600190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6040820152651c8818d85b1b60d21b606082015260800190565b60208082526028908201527f534c41526567697374727920616464726573732068617320616c7265616479206040820152671899595b881cd95d60c21b606082015260800190565b60208082526021908201527f43616e206f6e6c792062652063616c6c656420627920534c41526567697374726040820152607960f81b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b60208082526028908201527f536f75726365206d75737420626520746865206f7261636c65206f6620746865604082015267081c995c5d595cdd60c21b606082015260800190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b60005b83811015611bca578181015183820152602001611bb2565b83811115610d545750506000910152565b6001600160a01b0381168114611bf057600080fd5b50565b8015158114611bf057600080fdfea2646970667358221220c1fc647814e65f555b70726170ddaa24e61a65ea6d319ad308541b37c01584ed64736f6c63430006060033";

type SEAMessengerConstructorParams =
  | [linkLibraryAddresses: SEAMessengerLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SEAMessengerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class SEAMessenger__factory extends ContractFactory {
  constructor(...args: SEAMessengerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        SEAMessenger__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: SEAMessengerLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$a50a81560717ba31a37cba6af2d185101e\\$__", "g"),
      linkLibraryAddresses[
        "@stacktical/dsla-contracts/contracts/StringUtils.sol:StringUtils"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    _messengerChainlinkOracle: string,
    _messengerChainlinkToken: string,
    _feeMultiplier: BigNumberish,
    _periodRegistry: string,
    _stakeRegistry: string,
    _networkName: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SEAMessenger> {
    return super.deploy(
      _messengerChainlinkOracle,
      _messengerChainlinkToken,
      _feeMultiplier,
      _periodRegistry,
      _stakeRegistry,
      _networkName,
      overrides || {}
    ) as Promise<SEAMessenger>;
  }
  getDeployTransaction(
    _messengerChainlinkOracle: string,
    _messengerChainlinkToken: string,
    _feeMultiplier: BigNumberish,
    _periodRegistry: string,
    _stakeRegistry: string,
    _networkName: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _messengerChainlinkOracle,
      _messengerChainlinkToken,
      _feeMultiplier,
      _periodRegistry,
      _stakeRegistry,
      _networkName,
      overrides || {}
    );
  }
  attach(address: string): SEAMessenger {
    return super.attach(address) as SEAMessenger;
  }
  connect(signer: Signer): SEAMessenger__factory {
    return super.connect(signer) as SEAMessenger__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SEAMessengerInterface {
    return new utils.Interface(_abi) as SEAMessengerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SEAMessenger {
    return new Contract(address, _abi, signerOrProvider) as SEAMessenger;
  }
}

export interface SEAMessengerLibraryAddresses {
  ["@stacktical/dsla-contracts/contracts/StringUtils.sol:StringUtils"]: string;
}
