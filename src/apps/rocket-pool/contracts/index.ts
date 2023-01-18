import { Injectable, Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { ContractFactory } from '~contract/contracts';
import { Network } from '~types/network.interface';

import {
  RocketClaimNode__factory,
  RocketDaoNodeTrusted__factory,
  RocketMerkleDistributorMainnet__factory,
  RocketMinipoolManager__factory,
  RocketNodeDeposit__factory,
  RocketNodeDistributorFactory__factory,
  RocketNodeStaking__factory,
} from './ethers';

// eslint-disable-next-line
type ContractOpts = { address: string; network: Network };

@Injectable()
export class RocketPoolContractFactory extends ContractFactory {
  constructor(@Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit) {
    super((network: Network) => appToolkit.getNetworkProvider(network));
  }

  rocketClaimNode({ address, network }: ContractOpts) {
    return RocketClaimNode__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  rocketDaoNodeTrusted({ address, network }: ContractOpts) {
    return RocketDaoNodeTrusted__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  rocketMerkleDistributorMainnet({ address, network }: ContractOpts) {
    return RocketMerkleDistributorMainnet__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  rocketMinipoolManager({ address, network }: ContractOpts) {
    return RocketMinipoolManager__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  rocketNodeDeposit({ address, network }: ContractOpts) {
    return RocketNodeDeposit__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  rocketNodeDistributorFactory({ address, network }: ContractOpts) {
    return RocketNodeDistributorFactory__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  rocketNodeStaking({ address, network }: ContractOpts) {
    return RocketNodeStaking__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
}

export type { RocketClaimNode } from './ethers';
export type { RocketDaoNodeTrusted } from './ethers';
export type { RocketMerkleDistributorMainnet } from './ethers';
export type { RocketMinipoolManager } from './ethers';
export type { RocketNodeDeposit } from './ethers';
export type { RocketNodeDistributorFactory } from './ethers';
export type { RocketNodeStaking } from './ethers';
