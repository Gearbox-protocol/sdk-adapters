import type { GearboxSDK } from "@gearbox-protocol/sdk";
import type { AbstractAdapterContractOptions } from "./AbstractAdapter.js";
import { AbstractAdapterContract } from "./AbstractAdapter.js";
import { iMellowWrapperAdapterAbi } from "@gearbox-protocol/integrations-v3";

const abi = iMellowWrapperAdapterAbi;
type abi = typeof abi;

export class MellowWrapperAdapterContract extends AbstractAdapterContract<abi> {
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
