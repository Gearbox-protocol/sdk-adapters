import type { GearboxSDK } from "@gearbox-protocol/sdk";
import type { AbstractAdapterContractOptions } from "./AbstractAdapter.js";
import { AbstractAdapterContract } from "./AbstractAdapter.js";
import { iStakingRewardsAdapterAbi } from "@gearbox-protocol/integrations-v3";

const abi = iStakingRewardsAdapterAbi;
type abi = typeof abi;

export class StakingRewardsAdapterContract extends AbstractAdapterContract<
  typeof abi
> {
  constructor(
    sdk: GearboxSDK,
    args: Omit<AbstractAdapterContractOptions<abi>, "abi">
  ) {
    super(sdk, {
      ...args,
      abi,
    });
  }
}
