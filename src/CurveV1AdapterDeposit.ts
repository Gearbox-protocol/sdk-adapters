import type { GearboxSDK } from "@gearbox-protocol/sdk";
import type { AbstractAdapterContractOptions } from "./AbstractAdapter.js";
import { AbstractAdapterContract } from "./AbstractAdapter.js";
import { iCurveV1AdapterAbi } from "@gearbox-protocol/integrations-v3";

const abi = iCurveV1AdapterAbi;
type abi = typeof abi;

export class CurveV1AdapterDeposit extends AbstractAdapterContract<abi> {
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
