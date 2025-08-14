import { iCurveV1_2AssetsAdapterAbi } from "@gearbox-protocol/integrations-v3";
import type { GearboxSDK } from "@gearbox-protocol/sdk";
import { type Address, decodeAbiParameters } from "viem";
import type { AbstractAdapterContractOptions } from "./AbstractAdapter.js";
import { AbstractAdapterContract } from "./AbstractAdapter.js";

const abi = iCurveV1_2AssetsAdapterAbi;

export class Curve2AssetsAdapterContract extends AbstractAdapterContract<
  typeof abi
> {
  public readonly token: Address;
  public readonly lpToken: Address;
  public readonly metapoolBase: Address;
  public readonly use256: boolean;
  public readonly tokens: [Address, Address];
  public readonly underlyings: [Address, Address, Address, Address];

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
        { type: "address", name: "lpToken" },
        { type: "address", name: "metapoolBase" },
        { type: "bool", name: "use256" },
        { type: "address[2]", name: "tokens" },
        { type: "address[4]", name: "underlyings" },
      ],
      args.baseParams.serializedParams,
    );

    this.token = decoded[2];
    this.lpToken = decoded[3];
    this.metapoolBase = decoded[4];
    this.use256 = decoded[5];
    this.tokens = [decoded[6][0], decoded[6][1]];
    this.underlyings = [
      decoded[7][0],
      decoded[7][1],
      decoded[7][2],
      decoded[7][3],
    ];
  }
}
