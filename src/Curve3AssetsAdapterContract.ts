import type { GearboxSDK } from "@gearbox-protocol/sdk";
import type { AbstractAdapterContractOptions } from "./AbstractAdapter.js";
import { AbstractAdapterContract } from "./AbstractAdapter.js";
import { iCurveV1_3AssetsAdapterAbi } from "@gearbox-protocol/integrations-v3";

const abi = iCurveV1_3AssetsAdapterAbi;

export class Curve3AssetsAdapterContract extends AbstractAdapterContract<
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
