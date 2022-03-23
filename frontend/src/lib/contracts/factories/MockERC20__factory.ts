/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  type Overrides,
  type BigNumberish,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockERC20, MockERC20Interface } from "../MockERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "supply",
        type: "uint256",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    name: "nonces",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162000f5e38038062000f5e83398101604081905262000034916200031e565b82826012826000908051906020019062000050929190620001c5565b50815162000066906001906020850190620001c5565b507fff0000000000000000000000000000000000000000000000000000000000000060f882901b166080524660a0526200009f620000bc565b60c05250620000b391503390508262000158565b505050620004a9565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620000f091906200038e565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b80600260008282546200016c919062000431565b90915550506001600160a01b0382166000818152600360209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b828054620001d39062000456565b90600052602060002090601f016020900481019282620001f7576000855562000242565b82601f106200021257805160ff191683800117855562000242565b8280016001018555821562000242579182015b828111156200024257825182559160200191906001019062000225565b506200025092915062000254565b5090565b5b8082111562000250576000815560010162000255565b600082601f8301126200027c578081fd5b81516001600160401b038082111562000299576200029962000493565b604051601f8301601f19908116603f01168101908282118183101715620002c457620002c462000493565b81604052838152602092508683858801011115620002e0578485fd5b8491505b83821015620003035785820183015181830184015290820190620002e4565b838211156200031457848385830101525b9695505050505050565b60008060006060848603121562000333578283fd5b83516001600160401b03808211156200034a578485fd5b62000358878388016200026b565b945060208601519150808211156200036e578384fd5b506200037d868287016200026b565b925050604084015190509250925092565b600080835482600182811c915080831680620003ab57607f831692505b6020808410821415620003cc57634e487b7160e01b87526022600452602487fd5b818015620003e35760018114620003f55762000423565b60ff1986168952848901965062000423565b60008a815260209020885b868110156200041b5781548b82015290850190830162000400565b505084890196505b509498975050505050505050565b600082198211156200045157634e487b7160e01b81526011600452602481fd5b500190565b600181811c908216806200046b57607f821691505b602082108114156200048d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b60805160f81c60a05160c051610a82620004dc6000396000610425015260006103f0015260006101290152610a826000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a08231146101655780637ecebe001461018557806395d89b41146101a5578063a9059cbb146101ad578063d505accf146101c0578063dd62ed3e146101d557600080fd5b806306fdde03146100b9578063095ea7b3146100d757806318160ddd146100fa57806323b872dd14610111578063313ce567146101245780633644e5151461015d575b600080fd5b6100c1610200565b6040516100ce919061099b565b60405180910390f35b6100ea6100e53660046108d7565b61028e565b60405190151581526020016100ce565b61010360025481565b6040519081526020016100ce565b6100ea61011f36600461082b565b6102fa565b61014b7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016100ce565b6101036103ec565b6101036101733660046107d8565b60036020526000908152604090205481565b6101036101933660046107d8565b60056020526000908152604090205481565b6100c1610447565b6100ea6101bb3660046108d7565b610454565b6101d36101ce366004610866565b6104cc565b005b6101036101e33660046107f9565b600460209081526000928352604080842090915290825290205481565b6000805461020d90610a11565b80601f016020809104026020016040519081016040528092919081815260200182805461023990610a11565b80156102865780601f1061025b57610100808354040283529160200191610286565b820191906000526020600020905b81548152906001019060200180831161026957829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906102e99086815260200190565b60405180910390a350600192915050565b6001600160a01b038316600090815260046020908152604080832033845290915281205460001981146103565761033183826109ee565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b0385166000908152600360205260408120805485929061037e9084906109ee565b90915550506001600160a01b03808516600081815260036020526040908190208054870190555190918716907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906103d99087815260200190565b60405180910390a3506001949350505050565b60007f000000000000000000000000000000000000000000000000000000000000000046146104225761041d610722565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b6001805461020d90610a11565b336000908152600360205260408120805483919083906104759084906109ee565b90915550506001600160a01b038316600081815260036020526040908190208054850190555133907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906102e99086815260200190565b428410156105215760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064015b60405180910390fd5b600061052b6103ec565b6001600160a01b0389811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938c166060840152608083018b905260a083019390935260c08083018a90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015610644573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381161580159061067a5750886001600160a01b0316816001600160a01b0316145b6106b75760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610518565b6001600160a01b0390811660009081526004602090815260408083208b8516808552908352928190208a905551898152919350918a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516107549190610900565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b80356001600160a01b03811681146107d357600080fd5b919050565b6000602082840312156107e9578081fd5b6107f2826107bc565b9392505050565b6000806040838503121561080b578081fd5b610814836107bc565b9150610822602084016107bc565b90509250929050565b60008060006060848603121561083f578081fd5b610848846107bc565b9250610856602085016107bc565b9150604084013590509250925092565b600080600080600080600060e0888a031215610880578283fd5b610889886107bc565b9650610897602089016107bc565b95506040880135945060608801359350608088013560ff811681146108ba578384fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156108e9578182fd5b6108f2836107bc565b946020939093013593505050565b600080835482600182811c91508083168061091c57607f831692505b602080841082141561093c57634e487b7160e01b87526022600452602487fd5b81801561095057600181146109615761098d565b60ff1986168952848901965061098d565b60008a815260209020885b868110156109855781548b82015290850190830161096c565b505084890196505b509498975050505050505050565b6000602080835283518082850152825b818110156109c7578581018301518582016040015282016109ab565b818111156109d85783604083870101525b50601f01601f1916929092016040019392505050565b600082821015610a0c57634e487b7160e01b81526011600452602481fd5b500390565b600181811c90821680610a2557607f821691505b60208210811415610a4657634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212209680becd29372d4bce4c76590a66d66775c102e2093791cec995b76693c9278364736f6c63430008040033";

type MockERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockERC20__factory extends ContractFactory {
  constructor(...args: MockERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MockERC20";
  }

  deploy(
    name: string,
    symbol: string,
    supply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockERC20> {
    return super.deploy(
      name,
      symbol,
      supply,
      overrides || {}
    ) as Promise<MockERC20>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    supply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, supply, overrides || {});
  }
  attach(address: string): MockERC20 {
    return super.attach(address) as MockERC20;
  }
  connect(signer: Signer): MockERC20__factory {
    return super.connect(signer) as MockERC20__factory;
  }
  static readonly contractName: "MockERC20";
  public readonly contractName: "MockERC20";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC20Interface {
    return new utils.Interface(_abi) as MockERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockERC20 {
    return new Contract(address, _abi, signerOrProvider) as MockERC20;
  }
}
