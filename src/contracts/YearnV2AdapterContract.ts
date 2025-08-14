import { iYearnV2AdapterAbi } from "@gearbox-protocol/integrations-v3";
import type { GearboxSDK } from "@gearbox-protocol/sdk";
import { type Address, decodeAbiParameters } from "viem";
import type { AbstractAdapterContractOptions } from "./AbstractAdapter.js";
import { AbstractAdapterContract } from "./AbstractAdapter.js";

const abi = iYearnV2AdapterAbi;

export class YearnV2RouterAdapterContract extends AbstractAdapterContract<
  typeof abi
> {
  public readonly token: Address;

  constructor(
    sdk: GearboxSDK,
    args: Omit<AbstractAdapterContractOptions<typeof abi>, "abi">,
  ) {
    super(sdk, { ...args, abi });

    // Decode parameters directly using ABI decoding
    const decoded = decodeAbiParameters(
      [
        { type: "address", name: "creditManager" },
        { type: "address", name: "targetContract" },
        { type: "address", name: "token" },
      ],
      args.baseParams.serializedParams,
    );

    this.token = decoded[2];
  }
}
