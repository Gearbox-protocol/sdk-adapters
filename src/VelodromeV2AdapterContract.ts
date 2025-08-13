import type { GearboxSDK } from "@gearbox-protocol/sdk";
import type { AbstractAdapterContractOptions } from "./AbstractAdapter.js";
import { AbstractAdapterContract } from "./AbstractAdapter.js";
import { iVelodromeV2RouterAdapterAbi } from "@gearbox-protocol/integrations-v3";

const abi = iVelodromeV2RouterAdapterAbi;

export class VelodromeV2RouterAdapterContract extends AbstractAdapterContract<
  typeof abi
> {
  constructor(
    sdk: GearboxSDK,
    args: Omit<AbstractAdapterContractOptions<typeof abi>, "abi">
  ) {
    super(sdk, {
      ...args,
      abi,
    });
  }
}
