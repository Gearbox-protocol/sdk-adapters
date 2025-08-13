import type { GearboxSDK } from "@gearbox-protocol/sdk";
import type { AbstractAdapterContractOptions } from "./AbstractAdapter.js";
import { AbstractAdapterContract } from "./AbstractAdapter.js";
import { iBalancerV2VaultAdapterAbi } from "@gearbox-protocol/integrations-v3";

const abi = iBalancerV2VaultAdapterAbi;
type abi = typeof abi;

export class BalancerV2VaultAdapterContract extends AbstractAdapterContract<abi> {
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
