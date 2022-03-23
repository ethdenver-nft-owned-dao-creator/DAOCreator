/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace BaseVault {
  export type MetaDataStruct = {
    name: string;
    vaultAddress: string;
    withdrawable: BigNumberish;
    id: BigNumberish;
    vaultType: BigNumberish;
  };

  export type MetaDataStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    name: string;
    vaultAddress: string;
    withdrawable: BigNumber;
    id: BigNumber;
    vaultType: BigNumber;
  };
}

export interface DegenVaultInterface extends utils.Interface {
  contractName: "DegenVault";
  functions: {
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "baseInit(string,string,address,address)": FunctionFragment;
    "burnNFTAndWithdraw(uint256)": FunctionFragment;
    "claimJackpot()": FunctionFragment;
    "ctx()": FunctionFragment;
    "currentId()": FunctionFragment;
    "deadline()": FunctionFragment;
    "depositToId(uint256,uint256)": FunctionFragment;
    "deposits(uint256)": FunctionFragment;
    "distributeYield()": FunctionFragment;
    "executeMetaTransaction(address,bytes,bytes32,bytes32,uint8)": FunctionFragment;
    "getApproved(uint256)": FunctionFragment;
    "getChainID()": FunctionFragment;
    "getNonce(address)": FunctionFragment;
    "init(address,address,uint16,uint16,uint256,uint256,uint16,uint16,string,string)": FunctionFragment;
    "initStrat()": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "jackpot()": FunctionFragment;
    "lastDepositer()": FunctionFragment;
    "minimumPrice()": FunctionFragment;
    "mintNewNft(uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "ownerOf(uint256)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "strat()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "symbol()": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "totalDeposits()": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "vaultToken()": FunctionFragment;
    "verify(address,uint256,uint256,bytes,bytes32,bytes32,uint8)": FunctionFragment;
    "withdrawFromId(uint256,uint256)": FunctionFragment;
    "withdrawableById(uint256)": FunctionFragment;
    "yieldPerDeposit()": FunctionFragment;
    "yieldPerId(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "baseInit",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "burnNFTAndWithdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimJackpot",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ctx", values?: undefined): string;
  encodeFunctionData(functionFragment: "currentId", values?: undefined): string;
  encodeFunctionData(functionFragment: "deadline", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "depositToId",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposits",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "distributeYield",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeMetaTransaction",
    values: [string, BytesLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getChainID",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getNonce", values: [string]): string;
  encodeFunctionData(
    functionFragment: "init",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      string
    ]
  ): string;
  encodeFunctionData(functionFragment: "initStrat", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "jackpot", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lastDepositer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minimumPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintNewNft",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "strat", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalDeposits",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "vaultToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFromId",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawableById",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "yieldPerDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "yieldPerId",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "baseInit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "burnNFTAndWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimJackpot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ctx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "currentId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deadline", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositToId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposits", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "distributeYield",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeMetaTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getChainID", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initStrat", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "jackpot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastDepositer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minimumPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintNewNft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "strat", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalDeposits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vaultToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFromId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawableById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "yieldPerDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "yieldPerId", data: BytesLike): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "MetaTransactionExecuted(address,address,bytes)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MetaTransactionExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  { owner: string; spender: string; id: BigNumber }
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  { owner: string; operator: string; approved: boolean }
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export type MetaTransactionExecutedEvent = TypedEvent<
  [string, string, string],
  { userAddress: string; relayerAddress: string; functionSignature: string }
>;

export type MetaTransactionExecutedEventFilter =
  TypedEventFilter<MetaTransactionExecutedEvent>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  { from: string; to: string; id: BigNumber }
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface DegenVault extends BaseContract {
  contractName: "DegenVault";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DegenVaultInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    approve(
      spender: string,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    baseInit(
      _name: string,
      _symbol: string,
      _token: string,
      strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    burnNFTAndWithdraw(
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimJackpot(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ctx(
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, number, number] & {
        jackpotBP: number;
        dividendsBP: number;
        timeDecay: number;
        growthFactor: number;
        vaultType: number;
      }
    >;

    currentId(overrides?: CallOverrides): Promise<[BigNumber]>;

    deadline(overrides?: CallOverrides): Promise<[BigNumber]>;

    depositToId(
      amount: BigNumberish,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposits(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; tracker: BigNumber }
    >;

    distributeYield(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeMetaTransaction(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getApproved(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getChainID(overrides?: CallOverrides): Promise<[BigNumber]>;

    getNonce(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nonce: BigNumber }>;

    init(
      _vaultToken: string,
      _strategy: string,
      _jackpotBP: BigNumberish,
      _dividendsBP: BigNumberish,
      _minimumPrice: BigNumberish,
      _intialTimeSeconds: BigNumberish,
      _timeDecay: BigNumberish,
      _growthFactor: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initStrat(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isApprovedForAll(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    jackpot(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastDepositer(overrides?: CallOverrides): Promise<[string]>;

    minimumPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    mintNewNft(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    ownerOf(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    strat(overrides?: CallOverrides): Promise<[string]>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    tokenURI(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BaseVault.MetaDataStructOutput]>;

    totalDeposits(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vaultToken(overrides?: CallOverrides): Promise<[string]>;

    verify(
      owner: string,
      nonce: BigNumberish,
      chainID: BigNumberish,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    withdrawFromId(
      amount: BigNumberish,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawableById(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { claimId: BigNumber }>;

    yieldPerDeposit(overrides?: CallOverrides): Promise<[BigNumber]>;

    yieldPerId(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  approve(
    spender: string,
    id: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  baseInit(
    _name: string,
    _symbol: string,
    _token: string,
    strategy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burnNFTAndWithdraw(
    id: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimJackpot(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ctx(
    overrides?: CallOverrides
  ): Promise<
    [number, number, number, number, number] & {
      jackpotBP: number;
      dividendsBP: number;
      timeDecay: number;
      growthFactor: number;
      vaultType: number;
    }
  >;

  currentId(overrides?: CallOverrides): Promise<BigNumber>;

  deadline(overrides?: CallOverrides): Promise<BigNumber>;

  depositToId(
    amount: BigNumberish,
    id: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposits(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amount: BigNumber; tracker: BigNumber }
  >;

  distributeYield(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeMetaTransaction(
    userAddress: string,
    functionSignature: BytesLike,
    sigR: BytesLike,
    sigS: BytesLike,
    sigV: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getApproved(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  getChainID(overrides?: CallOverrides): Promise<BigNumber>;

  getNonce(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  init(
    _vaultToken: string,
    _strategy: string,
    _jackpotBP: BigNumberish,
    _dividendsBP: BigNumberish,
    _minimumPrice: BigNumberish,
    _intialTimeSeconds: BigNumberish,
    _timeDecay: BigNumberish,
    _growthFactor: BigNumberish,
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initStrat(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isApprovedForAll(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  jackpot(overrides?: CallOverrides): Promise<BigNumber>;

  lastDepositer(overrides?: CallOverrides): Promise<string>;

  minimumPrice(overrides?: CallOverrides): Promise<BigNumber>;

  mintNewNft(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  ownerOf(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  strat(overrides?: CallOverrides): Promise<string>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tokenURI(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BaseVault.MetaDataStructOutput>;

  totalDeposits(overrides?: CallOverrides): Promise<BigNumber>;

  transferFrom(
    from: string,
    to: string,
    id: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vaultToken(overrides?: CallOverrides): Promise<string>;

  verify(
    owner: string,
    nonce: BigNumberish,
    chainID: BigNumberish,
    functionSignature: BytesLike,
    sigR: BytesLike,
    sigS: BytesLike,
    sigV: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  withdrawFromId(
    amount: BigNumberish,
    id: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawableById(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  yieldPerDeposit(overrides?: CallOverrides): Promise<BigNumber>;

  yieldPerId(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    approve(
      spender: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    baseInit(
      _name: string,
      _symbol: string,
      _token: string,
      strategy: string,
      overrides?: CallOverrides
    ): Promise<void>;

    burnNFTAndWithdraw(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claimJackpot(overrides?: CallOverrides): Promise<void>;

    ctx(
      overrides?: CallOverrides
    ): Promise<
      [number, number, number, number, number] & {
        jackpotBP: number;
        dividendsBP: number;
        timeDecay: number;
        growthFactor: number;
        vaultType: number;
      }
    >;

    currentId(overrides?: CallOverrides): Promise<BigNumber>;

    deadline(overrides?: CallOverrides): Promise<BigNumber>;

    depositToId(
      amount: BigNumberish,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deposits(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; tracker: BigNumber }
    >;

    distributeYield(overrides?: CallOverrides): Promise<void>;

    executeMetaTransaction(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getApproved(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    getChainID(overrides?: CallOverrides): Promise<BigNumber>;

    getNonce(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    init(
      _vaultToken: string,
      _strategy: string,
      _jackpotBP: BigNumberish,
      _dividendsBP: BigNumberish,
      _minimumPrice: BigNumberish,
      _intialTimeSeconds: BigNumberish,
      _timeDecay: BigNumberish,
      _growthFactor: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initStrat(overrides?: CallOverrides): Promise<void>;

    isApprovedForAll(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    jackpot(overrides?: CallOverrides): Promise<BigNumber>;

    lastDepositer(overrides?: CallOverrides): Promise<string>;

    minimumPrice(overrides?: CallOverrides): Promise<BigNumber>;

    mintNewNft(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    ownerOf(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    strat(overrides?: CallOverrides): Promise<string>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tokenURI(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BaseVault.MetaDataStructOutput>;

    totalDeposits(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    vaultToken(overrides?: CallOverrides): Promise<string>;

    verify(
      owner: string,
      nonce: BigNumberish,
      chainID: BigNumberish,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    withdrawFromId(
      amount: BigNumberish,
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawableById(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    yieldPerDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    yieldPerId(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      id?: BigNumberish | null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      spender?: string | null,
      id?: BigNumberish | null
    ): ApprovalEventFilter;

    "ApprovalForAll(address,address,bool)"(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      owner?: string | null,
      operator?: string | null,
      approved?: null
    ): ApprovalForAllEventFilter;

    "MetaTransactionExecuted(address,address,bytes)"(
      userAddress?: null,
      relayerAddress?: null,
      functionSignature?: null
    ): MetaTransactionExecutedEventFilter;
    MetaTransactionExecuted(
      userAddress?: null,
      relayerAddress?: null,
      functionSignature?: null
    ): MetaTransactionExecutedEventFilter;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      id?: BigNumberish | null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      id?: BigNumberish | null
    ): TransferEventFilter;
  };

  estimateGas: {
    approve(
      spender: string,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    baseInit(
      _name: string,
      _symbol: string,
      _token: string,
      strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burnNFTAndWithdraw(
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimJackpot(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ctx(overrides?: CallOverrides): Promise<BigNumber>;

    currentId(overrides?: CallOverrides): Promise<BigNumber>;

    deadline(overrides?: CallOverrides): Promise<BigNumber>;

    depositToId(
      amount: BigNumberish,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposits(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    distributeYield(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeMetaTransaction(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getApproved(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getChainID(overrides?: CallOverrides): Promise<BigNumber>;

    getNonce(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    init(
      _vaultToken: string,
      _strategy: string,
      _jackpotBP: BigNumberish,
      _dividendsBP: BigNumberish,
      _minimumPrice: BigNumberish,
      _intialTimeSeconds: BigNumberish,
      _timeDecay: BigNumberish,
      _growthFactor: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initStrat(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isApprovedForAll(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    jackpot(overrides?: CallOverrides): Promise<BigNumber>;

    lastDepositer(overrides?: CallOverrides): Promise<BigNumber>;

    minimumPrice(overrides?: CallOverrides): Promise<BigNumber>;

    mintNewNft(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    ownerOf(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    strat(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    tokenURI(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    totalDeposits(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vaultToken(overrides?: CallOverrides): Promise<BigNumber>;

    verify(
      owner: string,
      nonce: BigNumberish,
      chainID: BigNumberish,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawFromId(
      amount: BigNumberish,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawableById(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    yieldPerDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    yieldPerId(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    approve(
      spender: string,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    baseInit(
      _name: string,
      _symbol: string,
      _token: string,
      strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burnNFTAndWithdraw(
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimJackpot(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ctx(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deadline(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    depositToId(
      amount: BigNumberish,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposits(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    distributeYield(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeMetaTransaction(
      userAddress: string,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getApproved(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getChainID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNonce(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    init(
      _vaultToken: string,
      _strategy: string,
      _jackpotBP: BigNumberish,
      _dividendsBP: BigNumberish,
      _minimumPrice: BigNumberish,
      _intialTimeSeconds: BigNumberish,
      _timeDecay: BigNumberish,
      _growthFactor: BigNumberish,
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initStrat(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    jackpot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastDepositer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minimumPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintNewNft(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerOf(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    strat(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenURI(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalDeposits(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vaultToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    verify(
      owner: string,
      nonce: BigNumberish,
      chainID: BigNumberish,
      functionSignature: BytesLike,
      sigR: BytesLike,
      sigS: BytesLike,
      sigV: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawFromId(
      amount: BigNumberish,
      id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawableById(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    yieldPerDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    yieldPerId(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
