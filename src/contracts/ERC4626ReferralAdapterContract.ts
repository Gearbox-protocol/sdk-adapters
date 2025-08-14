import { erc4626ReferralAdapterAbi } from "@gearbox-protocol/integrations-v3";
import type { GearboxSDK } from "@gearbox-protocol/sdk";
import { type Address, decodeAbiParameters } from "viem";
import type { AbstractAdapterContractOptions } from "./AbstractAdapter.js";
import { AbstractAdapterContract } from "./AbstractAdapter.js";

const abi = erc4626ReferralAdapterAbi;

export class ERC4626ReferralAdapterContract extends AbstractAdapterContract<
  typeof abi
> {
  public readonly asset: Address;
  public readonly referral: number;

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
        { type: "address", name: "asset" },
        { type: "uint16", name: "referral" },
      ],
      args.baseParams.serializedParams,
    );

    this.asset = decoded[2];
    this.referral = decoded[3];
  }
}
