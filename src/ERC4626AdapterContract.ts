import type { GearboxSDK } from "@gearbox-protocol/sdk";
import type { AbstractAdapterContractOptions } from "./AbstractAdapter.js";
import { AbstractAdapterContract } from "./AbstractAdapter.js";
import { ierc4626AdapterAbi } from "@gearbox-protocol/integrations-v3";

const abi = ierc4626AdapterAbi;

export class ERC4626AdapterContract extends AbstractAdapterContract<
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
