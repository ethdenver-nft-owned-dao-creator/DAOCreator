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
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface VaultFactoryInterface extends utils.Interface {
  contractName: "VaultFactory";
  functions: {
    "admin()": FunctionFragment;
    "createVault(uint256,bytes32,string,string,address)": FunctionFragment;
    "keys(uint256)": FunctionFragment;
    "sImpl(uint256)": FunctionFragment;
    "setSImpl(uint256,address)": FunctionFragment;
    "setUnderlying(uint256,address,address)": FunctionFragment;
    "setVImpl(uint256,address)": FunctionFragment;
    "vImpl(uint256)": FunctionFragment;
    "vaults(bytes32)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "createVault",
    values: [BigNumberish, BytesLike, string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "keys", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "sImpl", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "setSImpl",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setUnderlying",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setVImpl",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "vImpl", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "vaults", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "keys", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sImpl", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setSImpl", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setVImpl", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vImpl", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vaults", data: BytesLike): Result;

  events: {
    "NewStrat(uint256,address)": EventFragment;
    "NewVault(uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewStrat"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewVault"): EventFragment;
}

export type NewStratEvent = TypedEvent<
  [BigNumber, string],
  { _index: BigNumber; _impl: string }
>;

export type NewStratEventFilter = TypedEventFilter<NewStratEvent>;

export type NewVaultEvent = TypedEvent<
  [BigNumber, string],
  { _index: BigNumber; _impl: string }
>;

export type NewVaultEventFilter = TypedEventFilter<NewVaultEvent>;

export interface VaultFactory extends BaseContract {
  contractName: "VaultFactory";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VaultFactoryInterface;

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
    admin(overrides?: CallOverrides): Promise<[string]>;

    createVault(
      vKey: BigNumberish,
      id: BytesLike,
      name: string,
      symbol: string,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    keys(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    sImpl(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    setSImpl(
      _index: BigNumberish,
      _impl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUnderlying(
      _index: BigNumberish,
      _token: string,
      _underlying: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setVImpl(
      _index: BigNumberish,
      _impl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vImpl(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    vaults(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;
  };

  admin(overrides?: CallOverrides): Promise<string>;

  createVault(
    vKey: BigNumberish,
    id: BytesLike,
    name: string,
    symbol: string,
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  keys(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  sImpl(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  setSImpl(
    _index: BigNumberish,
    _impl: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUnderlying(
    _index: BigNumberish,
    _token: string,
    _underlying: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setVImpl(
    _index: BigNumberish,
    _impl: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vImpl(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  vaults(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    admin(overrides?: CallOverrides): Promise<string>;

    createVault(
      vKey: BigNumberish,
      id: BytesLike,
      name: string,
      symbol: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<string>;

    keys(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    sImpl(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    setSImpl(
      _index: BigNumberish,
      _impl: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setUnderlying(
      _index: BigNumberish,
      _token: string,
      _underlying: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setVImpl(
      _index: BigNumberish,
      _impl: string,
      overrides?: CallOverrides
    ): Promise<void>;

    vImpl(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    vaults(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "NewStrat(uint256,address)"(
      _index?: null,
      _impl?: null
    ): NewStratEventFilter;
    NewStrat(_index?: null, _impl?: null): NewStratEventFilter;

    "NewVault(uint256,address)"(
      _index?: null,
      _impl?: null
    ): NewVaultEventFilter;
    NewVault(_index?: null, _impl?: null): NewVaultEventFilter;
  };

  estimateGas: {
    admin(overrides?: CallOverrides): Promise<BigNumber>;

    createVault(
      vKey: BigNumberish,
      id: BytesLike,
      name: string,
      symbol: string,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    keys(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    sImpl(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    setSImpl(
      _index: BigNumberish,
      _impl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUnderlying(
      _index: BigNumberish,
      _token: string,
      _underlying: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setVImpl(
      _index: BigNumberish,
      _impl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vImpl(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    vaults(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createVault(
      vKey: BigNumberish,
      id: BytesLike,
      name: string,
      symbol: string,
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    keys(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sImpl(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setSImpl(
      _index: BigNumberish,
      _impl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUnderlying(
      _index: BigNumberish,
      _token: string,
      _underlying: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setVImpl(
      _index: BigNumberish,
      _impl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vImpl(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vaults(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
