import type { GearboxSDK } from "@gearbox-protocol/sdk";
import { type Address, decodeAbiParameters } from "viem";
import type { AbstractAdapterContractOptions } from "./AbstractAdapter.js";
import { AbstractAdapterContract } from "./AbstractAdapter.js";

// TODO:
const abi = [];
type abi = typeof abi;

export class InfinifiGatewayAdapterContract extends AbstractAdapterContract<abi> {
  public readonly usdc: Address;
  public readonly iusd: Address;
  public readonly siusd: Address;
  public readonly allowedLockedTokens: Address[];

  constructor(
    sdk: GearboxSDK,
    args: Omit<AbstractAdapterContractOptions<abi>, "abi">,
  ) {
    super(sdk, { ...args, abi });

    // Decode parameters directly using ABI decoding
    const decoded = decodeAbiParameters(
      [
        { type: "address", name: "creditManager" },
        { type: "address", name: "targetContract" },
        { type: "address", name: "usdc" },
        { type: "address", name: "iusd" },
        { type: "address", name: "siusd" },
        { type: "address[]", name: "allowedLockedTokens" },
      ],
      args.baseParams.serializedParams,
    );

    this.usdc = decoded[2];
    this.iusd = decoded[3];
    this.siusd = decoded[4];
    this.allowedLockedTokens = [...decoded[5]];
  }
}
