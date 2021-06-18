import { AbiItem } from 'web3-utils/types';

export const MessengerRegistryABI: AbiItem[] = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'ownerAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'messengerAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'specificationUrl',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'precision',
        type: 'uint256',
      },
      { indexed: false, internalType: 'uint256', name: 'id', type: 'uint256' },
    ],
    name: 'MessengerModified',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'ownerAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'messengerAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'specificationUrl',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'precision',
        type: 'uint256',
      },
      { indexed: false, internalType: 'uint256', name: 'id', type: 'uint256' },
    ],
    name: 'MessengerRegistered',
    type: 'event',
  },
  {
    inputs: [],
    name: 'getMessengers',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'ownerAddress', type: 'address' },
          {
            internalType: 'address',
            name: 'messengerAddress',
            type: 'address',
          },
          { internalType: 'string', name: 'specificationUrl', type: 'string' },
          { internalType: 'uint256', name: 'precision', type: 'uint256' },
          { internalType: 'uint256', name: 'requestsCounter', type: 'uint256' },
          { internalType: 'uint256', name: 'fulfillsCounter', type: 'uint256' },
          { internalType: 'uint256', name: 'id', type: 'uint256' },
        ],
        internalType: 'struct MessengerRegistry.Messenger[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getMessengersLength',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'string', name: '_specificationUrl', type: 'string' },
      { internalType: 'uint256', name: '_messengerId', type: 'uint256' },
    ],
    name: 'modifyMessenger',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'callerAddress_', type: 'address' },
      { internalType: 'address', name: 'messengerAddress_', type: 'address' },
      { internalType: 'string', name: 'specificationUrl_', type: 'string' },
    ],
    name: 'registerMessenger',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'messengerAddress_', type: 'address' },
    ],
    name: 'registeredMessengers',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'setSLARegistry',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
