import { Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';
import { getLabelFromToken } from '~app-toolkit/helpers/presentation/image.present';
import { MetaType } from '~position/position.interface';
import { ContractPositionTemplatePositionFetcher } from '~position/template/contract-position.template.position-fetcher';
import { GetDisplayPropsParams, GetTokenBalancesParams } from '~position/template/contract-position.template.types';

import { RocketNodeStaking, RocketPoolContractFactory } from '../contracts';

@PositionTemplate()
export class EthereumRocketPoolStakingContractPositionFetcher extends ContractPositionTemplatePositionFetcher<RocketNodeStaking> {
  groupLabel = 'Staking';

  constructor(
    @Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit,
    @Inject(RocketPoolContractFactory) protected readonly contractFactory: RocketPoolContractFactory,
  ) {
    super(appToolkit);
  }

  getContract(address: string): RocketNodeStaking {
    return this.contractFactory.rocketNodeStaking({ address, network: this.network });
  }

  async getDefinitions() {
    return [{ address: '0x3019227b2b8493e45bf5d25302139c9a2713bf15' }];
  }

  async getTokenDefinitions() {
    const ROCKET_TOKEN_RPL = '0xd33526068d116ce69f19a9ee46f0bd304f21a51f';
    return [
      {
        metaType: MetaType.SUPPLIED,
        address: ROCKET_TOKEN_RPL,
        network: this.network,
      },
      {
        metaType: MetaType.CLAIMABLE,
        address: ROCKET_TOKEN_RPL,
        network: this.network,
      },
    ];
  }

  async getLabel({ contractPosition }: GetDisplayPropsParams<RocketNodeStaking>) {
    return `Staked ${getLabelFromToken(contractPosition.tokens[0])}`;
  }

  async getTokenBalancesPerPosition({ address, contract }: GetTokenBalancesParams<RocketNodeStaking>) {
    const multicall = this.appToolkit.getMulticall(this.network);
    const rocketClaimNodeContract = this.contractFactory.rocketClaimNode({ address, network: this.network });
    const rocketNodeDistributorContract = this.contractFactory.rocketNodeDistributorFactory({
      address,
      network: this.network,
    });
    const proxyAddress = await multicall.wrap(rocketNodeDistributorContract).getProxyAddress(address);
    return [
      await multicall.wrap(contract).getNodeRPLStake(address),
      await multicall.wrap(rocketClaimNodeContract).getClaimRewardsAmount(address),
    ];
  }
}
