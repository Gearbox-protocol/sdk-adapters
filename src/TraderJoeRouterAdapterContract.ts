import type { GearboxSDK } from "@gearbox-protocol/sdk";
import type { AbstractAdapterContractOptions } from "./AbstractAdapter.js";
import { AbstractAdapterContract } from "./AbstractAdapter.js";
import { iTraderJoeRouterAdapterAbi } from "@gearbox-protocol/integrations-v3";

const abi = iTraderJoeRouterAdapterAbi;
type abi = typeof abi;

export class TraderJoeRouterAdapterContract extends AbstractAdapterContract<abi> {
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
