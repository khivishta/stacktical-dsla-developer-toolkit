/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Staking, StakingInterface } from "../Staking";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISLARegistry",
        name: "slaRegistry_",
        type: "address",
      },
      {
        internalType: "bool",
        name: "whitelistedContract_",
        type: "bool",
      },
      {
        internalType: "uint128",
        name: "slaID_",
        type: "uint128",
      },
      {
        internalType: "uint64",
        name: "leverage_",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "contractOwner_",
        type: "address",
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
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "dpTokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "dpTokenName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "dpTokenSymbol",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "duTokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "duTokenName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "duTokenSymbol",
        type: "string",
      },
    ],
    name: "DTokensCreated",
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
        internalType: "uint256",
        name: "periodId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardPercentage",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardPercentagePrecision",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardAmount",
        type: "uint256",
      },
    ],
    name: "ProviderRewardGenerated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "periodId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "usersStake",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "leverage",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "compensation",
        type: "uint256",
      },
    ],
    name: "UserCompensationGenerated",
    type: "event",
  },
  {
    inputs: [],
    name: "DSLAburnRate",
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
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "addAllowedTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_userAddresses",
        type: "address[]",
      },
    ],
    name: "addUsersToWhitelist",
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
    name: "allowedTokens",
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
        name: "",
        type: "address",
      },
    ],
    name: "dpTokenRegistry",
    outputs: [
      {
        internalType: "contract ERC20PresetMinterPauser",
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
        name: "",
        type: "address",
      },
    ],
    name: "duTokenRegistry",
    outputs: [
      {
        internalType: "contract ERC20PresetMinterPauser",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllowedTokensLength",
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
        name: "_staker",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_allowedTokenIndex",
        type: "uint256",
      },
    ],
    name: "getTokenStake",
    outputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "stake",
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
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "isAllowedToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "leverage",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "providerPool",
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
        name: "",
        type: "address",
      },
    ],
    name: "registeredStakers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_userAddresses",
        type: "address[]",
      },
    ],
    name: "removeUsersFromWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "slaID",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
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
    name: "stakers",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "usersPool",
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
        name: "",
        type: "address",
      },
    ],
    name: "whitelist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "whitelistedContract",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101406040523480156200001257600080fd5b5060405162001c8038038062001c80833981810160405260a08110156200003857600080fd5b5080516020820151604083015160608401516080909401519293919290919060006200006c6001600160e01b036200038f16565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350846001600160a01b031663683048356040518163ffffffff1660e01b815260040160206040518083038186803b158015620000f057600080fd5b505afa15801562000105573d6000803e3d6000fd5b505050506040513d60208110156200011c57600080fd5b5051600180546001600160a01b0319166001600160a01b0392831617905560408051639fc4caa560e01b8152905191871691639fc4caa591600480820192602092909190829003018186803b1580156200017557600080fd5b505afa1580156200018a573d6000803e3d6000fd5b505050506040513d6020811015620001a157600080fd5b505160601b6001600160601b03191660805283151560f81b6101005260015460408051637b8041cf60e11b8152905160009283926001600160a01b039091169163f700839e9160048082019261012092909190829003018186803b1580156200020957600080fd5b505afa1580156200021e573d6000803e3d6000fd5b505050506040513d6101208110156200023657600080fd5b50805160e09091015160015460408051638b8e530960e01b815290519395509193506001600160a01b031691638b8e530991600480820192602092909190829003018186803b1580156200028957600080fd5b505afa1580156200029e573d6000803e3d6000fd5b505050506040513d6020811015620002b557600080fd5b505160601b6001600160601b03191660a05260e08290526001600160a01b03831660009081526009602052604090208054600160ff19909116179055608085901b6001600160801b03191660c0526001600160401b03818116908516118015906200032a57506001846001600160401b031610155b62000371576040805162461bcd60e51b8152602060048201526012602482015271696e636f7272656374206c6576657261676560701b604482015290519081900360640190fd5b50505060c01b6001600160c01b031916610120525062000393915050565b3390565b60805160601c60a05160601c60c05160801c60e0516101005160f81c6101205160c01c611899620003e760003980610ffb525080610fd752508061134352508061077052806115fe525050506118996000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c8063639b6fc3116100b8578063a7e8d8d41161007c578063a7e8d8d414610428578063b7bc347e1461044e578063cbe230c314610456578063f2db10fe1461047c578063f2fde38b146104a0578063fd5e6dd1146104c657610137565b8063639b6fc31461035c578063715018a6146103825780638d21c7701461038a5780638da5cb5b146103fa5780639b19251a1461040257610137565b80634fb2647e116100ff5780634fb2647e1461021f57806357ac94f0146102455780635ae698ff146102945780635c1c20de146103375780635e5f2e261461033f57610137565b8063171e44ea1461013c57806318e45427146101645780632c86d98e14610180578063484fbf2b146101a55780634e0c91f6146101dd575b600080fd5b6101626004803603602081101561015257600080fd5b50356001600160a01b03166104e3565b005b61016c610fd5565b604080519115158252519081900360200190f35b610188610ff9565b6040805167ffffffffffffffff9092168252519081900360200190f35b6101cb600480360360208110156101bb57600080fd5b50356001600160a01b031661101d565b60408051918252519081900360200190f35b610203600480360360208110156101f357600080fd5b50356001600160a01b031661102f565b604080516001600160a01b039092168252519081900360200190f35b6102036004803603602081101561023557600080fd5b50356001600160a01b031661104a565b6102716004803603604081101561025b57600080fd5b506001600160a01b038135169060200135611065565b604080516001600160a01b03909316835260208301919091528051918290030190f35b610162600480360360208110156102aa57600080fd5b8101906020810181356401000000008111156102c557600080fd5b8201836020820111156102d757600080fd5b803590602001918460208302840111640100000000831117156102f957600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955061123a945050505050565b6101cb611341565b6102036004803603602081101561035557600080fd5b5035611365565b6101cb6004803603602081101561037257600080fd5b50356001600160a01b031661138c565b61016261139e565b610162600480360360208110156103a057600080fd5b8101906020810181356401000000008111156103bb57600080fd5b8201836020820111156103cd57600080fd5b803590602001918460208302840111640100000000831117156103ef57600080fd5b50909250905061144a565b610203611560565b61016c6004803603602081101561041857600080fd5b50356001600160a01b031661156f565b61016c6004803603602081101561043e57600080fd5b50356001600160a01b0316611584565b6101cb611599565b61016c6004803603602081101561046c57600080fd5b50356001600160a01b031661159f565b6104846115fc565b604080516001600160801b039092168252519081900360200190f35b610162600480360360208110156104b657600080fd5b50356001600160a01b0316611620565b610203600480360360208110156104dc57600080fd5b5035611722565b6104eb61172f565b6001600160a01b03166104fc611560565b6001600160a01b031614610545576040805162461bcd60e51b81526020600482018190526024820152600080516020611844833981519152604482015290519081900360640190fd5b60015460408051637b8041cf60e11b815290516000926001600160a01b03169163f700839e91600480830192610120929190829003018186803b15801561058b57600080fd5b505afa15801561059f573d6000803e3d6000fd5b505050506040513d6101208110156105b657600080fd5b5060c0015190506105c68261159f565b15610608576040805162461bcd60e51b815260206004820152600d60248201526c185b1c9958591e481859191959609a1b604482015290519081900360640190fd5b6001546040805163cbe230c360e01b81526001600160a01b0385811660048301529151919092169163cbe230c3916024808301926020929190829003018186803b15801561065557600080fd5b505afa158015610669573d6000803e3d6000fd5b505050506040513d602081101561067f57600080fd5b50516106c0576040805162461bcd60e51b815260206004820152600b60248201526a1b9bdd08185b1b1bddd95960aa1b604482015290519081900360640190fd5b6008805460018101825560008290527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30180546001600160a01b0319166001600160a01b03851617905554811015610752576040805162461bcd60e51b815260206004820152601060248201526f0dac2f040e8ded6cadc40d8cadccee8d60831b604482015290519081900360640190fd5b606073__$a50a81560717ba31a37cba6af2d185101e$__63fc966d457f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040180826001600160801b0316815260200191505060006040518083038186803b1580156107cc57600080fd5b505af41580156107e0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561080957600080fd5b810190808051604051939291908464010000000082111561082957600080fd5b90830190602082018581111561083e57600080fd5b825164010000000081118282018810171561085857600080fd5b82525081516020918201929091019080838360005b8381101561088557818101518382015260200161086d565b50505050905090810190601f1680156108b25780820380516001836020036101000a031916815260200191505b50604052505050905060608160405160200180806a44534c412d53484f52542d60a81b815250600b0182805190602001908083835b602083106109065780518252601f1990920191602091820191016108e7565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052905060608260405160200180806744534c412d53502d60c01b81525060080182805190602001908083835b602083106109845780518252601f199092019160209182019101610965565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052905060608360405160200180806944534c412d4c4f4e472d60b01b815250600a0182805190602001908083835b60208310610a045780518252601f1990920191602091820191016109e5565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051602081830303815290604052905060608460405160200180806744534c412d4c502d60c01b81525060080182805190602001908083835b60208310610a825780518252601f199092019160209182019101610a63565b51815160209384036101000a60001901801990921691161790526040805192909401828103601f19018352808552600154633350214760e11b8252600482019586528b5160448301528b51939850600097506001600160a01b031695506366a0428e948b94508a939092839260248101926064909101918701908083838d5b83811015610b19578181015183820152602001610b01565b50505050905090810190601f168015610b465780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015610b79578181015183820152602001610b61565b50505050905090810190601f168015610ba65780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b158015610bc757600080fd5b505af1158015610bdb573d6000803e3d6000fd5b505050506040513d6020811015610bf157600080fd5b505160015460408051633350214760e11b8152600481019182528651604482015286519394506000936001600160a01b03909316926366a0428e92889288928291602481019160649091019060208701908083838d5b83811015610c5f578181015183820152602001610c47565b50505050905090810190601f168015610c8c5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015610cbf578181015183820152602001610ca7565b50505050905090810190601f168015610cec5780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b158015610d0d57600080fd5b505af1158015610d21573d6000803e3d6000fd5b505050506040513d6020811015610d3757600080fd5b8101908080519060200190929190505050905080600560008b6001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b0316021790555081600460008b6001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b03160217905550816001600160a01b0316816001600160a01b03168a6001600160a01b03167fce8c390dc55dbcd418078f1391fbb7d471c01c228fc4464926095354cb27c02987888b8c6040518080602001806020018060200180602001858103855289818151815260200191508051906020019080838360005b83811015610e6a578181015183820152602001610e52565b50505050905090810190601f168015610e975780820380516001836020036101000a031916815260200191505b5085810384528851815288516020918201918a019080838360005b83811015610eca578181015183820152602001610eb2565b50505050905090810190601f168015610ef75780820380516001836020036101000a031916815260200191505b50858103835287518152875160209182019189019080838360005b83811015610f2a578181015183820152602001610f12565b50505050905090810190601f168015610f575780820380516001836020036101000a031916815260200191505b50858103825286518152865160209182019188019080838360005b83811015610f8a578181015183820152602001610f72565b50505050905090810190601f168015610fb75780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390a4505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60036020526000908152604090205481565b6004602052600090815260409020546001600160a01b031681565b6005602052600090815260409020546001600160a01b031681565b60008060006008848154811061107757fe5b6000918252602090912001546001600160a01b03169050611096611560565b6001600160a01b0316856001600160a01b031614156110d2576001600160a01b0381166000908152600260205260409020549092509050611233565b6001600160a01b0380821660009081526004602081815260408084205481516318160ddd60e01b8152915195169485936318160ddd938382019390929190829003018186803b15801561112457600080fd5b505afa158015611138573d6000803e3d6000fd5b505050506040513d602081101561114e57600080fd5b50519050806111665750909250600091506112339050565b6000826001600160a01b03166370a08231896040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156111be57600080fd5b505afa1580156111d2573d6000803e3d6000fd5b505050506040513d60208110156111e857600080fd5b50516001600160a01b038516600090815260036020526040902054909150849061122a90849061121e908563ffffffff61173316565b9063ffffffff61179516565b95509550505050505b9250929050565b61124261172f565b6001600160a01b0316611253611560565b6001600160a01b03161461129c576040805162461bcd60e51b81526020600482018190526024820152600080516020611844833981519152604482015290519081900360640190fd5b60005b815181101561133d57600960008383815181106112b857fe5b6020908102919091018101516001600160a01b031682528101919091526040016000205460ff16611335576001600960008484815181106112f557fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff0219169083151502179055505b60010161129f565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6008818154811061137257fe5b6000918252602090912001546001600160a01b0316905081565b60026020526000908152604090205481565b6113a661172f565b6001600160a01b03166113b7611560565b6001600160a01b031614611400576040805162461bcd60e51b81526020600482018190526024820152600080516020611844833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b61145261172f565b6001600160a01b0316611463611560565b6001600160a01b0316146114ac576040805162461bcd60e51b81526020600482018190526024820152600080516020611844833981519152604482015290519081900360640190fd5b60005b8181101561155b57600960008484848181106114c757fe5b602090810292909201356001600160a01b031683525081019190915260400160002054600160ff909116151514156115535760006009600085858581811061150b57fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff0219169083151502179055505b6001016114af565b505050565b6000546001600160a01b031690565b60096020526000908152604090205460ff1681565b60076020526000908152604090205460ff1681565b60085490565b6000805b6008548110156115f157826001600160a01b0316600882815481106115c457fe5b6000918252602090912001546001600160a01b031614156115e95760019150506115f7565b6001016115a3565b50600090505b919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b61162861172f565b6001600160a01b0316611639611560565b6001600160a01b031614611682576040805162461bcd60e51b81526020600482018190526024820152600080516020611844833981519152604482015290519081900360640190fd5b6001600160a01b0381166116c75760405162461bcd60e51b81526004018080602001828103825260268152602001806117fd6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6006818154811061137257fe5b3390565b6000826117425750600061178f565b8282028284828161174f57fe5b041461178c5760405162461bcd60e51b81526004018080602001828103825260218152602001806118236021913960400191505060405180910390fd5b90505b92915050565b60008082116117eb576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b8183816117f457fe5b04939250505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a26469706673582212200eb77faadd2eaccd528302d8ed93ae168ff15a827ea7b5c9557174255316c5e964736f6c63430006060033";

type StakingConstructorParams =
  | [linkLibraryAddresses: StakingLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class Staking__factory extends ContractFactory {
  constructor(...args: StakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(_abi, Staking__factory.linkBytecode(linkLibraryAddresses), signer);
    }
  }

  static linkBytecode(linkLibraryAddresses: StakingLibraryAddresses): string {
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
    slaRegistry_: string,
    whitelistedContract_: boolean,
    slaID_: BigNumberish,
    leverage_: BigNumberish,
    contractOwner_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Staking> {
    return super.deploy(
      slaRegistry_,
      whitelistedContract_,
      slaID_,
      leverage_,
      contractOwner_,
      overrides || {}
    ) as Promise<Staking>;
  }
  getDeployTransaction(
    slaRegistry_: string,
    whitelistedContract_: boolean,
    slaID_: BigNumberish,
    leverage_: BigNumberish,
    contractOwner_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      slaRegistry_,
      whitelistedContract_,
      slaID_,
      leverage_,
      contractOwner_,
      overrides || {}
    );
  }
  attach(address: string): Staking {
    return super.attach(address) as Staking;
  }
  connect(signer: Signer): Staking__factory {
    return super.connect(signer) as Staking__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingInterface {
    return new utils.Interface(_abi) as StakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Staking {
    return new Contract(address, _abi, signerOrProvider) as Staking;
  }
}

export interface StakingLibraryAddresses {
  ["@stacktical/dsla-contracts/contracts/StringUtils.sol:StringUtils"]: string;
}
