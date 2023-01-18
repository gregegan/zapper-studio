/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface RocketClaimNodeInterface extends utils.Interface {
  functions: {
    'claim()': FunctionFragment;
    'getClaimPossible(address)': FunctionFragment;
    'getClaimRewardsAmount(address)': FunctionFragment;
    'getClaimRewardsPerc(address)': FunctionFragment;
    'getEnabled()': FunctionFragment;
    'register(address,bool)': FunctionFragment;
    'version()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'claim'
      | 'getClaimPossible'
      | 'getClaimRewardsAmount'
      | 'getClaimRewardsPerc'
      | 'getEnabled'
      | 'register'
      | 'version',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'claim', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getClaimPossible', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getClaimRewardsAmount', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getClaimRewardsPerc', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getEnabled', values?: undefined): string;
  encodeFunctionData(functionFragment: 'register', values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
  encodeFunctionData(functionFragment: 'version', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'claim', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getClaimPossible', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getClaimRewardsAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getClaimRewardsPerc', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getEnabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'register', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'version', data: BytesLike): Result;

  events: {};
}

export interface RocketClaimNode extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RocketClaimNodeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    claim(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    getClaimPossible(_nodeAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;

    getClaimRewardsAmount(_nodeAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    getClaimRewardsPerc(_nodeAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    getEnabled(overrides?: CallOverrides): Promise<[boolean]>;

    register(
      _nodeAddress: PromiseOrValue<string>,
      _enable: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[number]>;
  };

  claim(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  getClaimPossible(_nodeAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

  getClaimRewardsAmount(_nodeAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  getClaimRewardsPerc(_nodeAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  getEnabled(overrides?: CallOverrides): Promise<boolean>;

  register(
    _nodeAddress: PromiseOrValue<string>,
    _enable: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    claim(overrides?: CallOverrides): Promise<void>;

    getClaimPossible(_nodeAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    getClaimRewardsAmount(_nodeAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getClaimRewardsPerc(_nodeAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getEnabled(overrides?: CallOverrides): Promise<boolean>;

    register(
      _nodeAddress: PromiseOrValue<string>,
      _enable: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<void>;

    version(overrides?: CallOverrides): Promise<number>;
  };

  filters: {};

  estimateGas: {
    claim(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    getClaimPossible(_nodeAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getClaimRewardsAmount(_nodeAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getClaimRewardsPerc(_nodeAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getEnabled(overrides?: CallOverrides): Promise<BigNumber>;

    register(
      _nodeAddress: PromiseOrValue<string>,
      _enable: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    getClaimPossible(_nodeAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getClaimRewardsAmount(
      _nodeAddress: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getClaimRewardsPerc(_nodeAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    register(
      _nodeAddress: PromiseOrValue<string>,
      _enable: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
