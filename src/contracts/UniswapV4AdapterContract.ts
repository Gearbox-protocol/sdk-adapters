
import type { GearboxSDK } from "@gearbox-protocol/sdk";
import {
  type Address,
  decodeAbiParameters
} from "viem";
import type { AbstractAdapterContractOptions } from "./AbstractAdapter.js";
import { AbstractAdapterContract } from "./AbstractAdapter.js";

// TODO:
const abi = [];
type abi = typeof abi;

export class UniswapV4AdapterContract extends AbstractAdapterContract<abi> {
  public readonly supportedPoolKeys: {
    token0: Address;
    token1: Address;
    fee: number;
    tickSpacing: number;
    hooks: Address;
  }[];

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
        {
          type: "tuple[]",
          name: "supportedPoolKeys",
          components: [
            { type: "address", name: "token0" },
            { type: "address", name: "token1" },
            { type: "uint24", name: "fee" },
            { type: "uint24", name: "tickSpacing" },
            { type: "address", name: "hooks" },
          ],
        },
      ],
      args.baseParams.serializedParams,
    );

    this.supportedPoolKeys = decoded[2].map(pool => ({
      token0: pool.token0,
      token1: pool.token1,
      fee: pool.fee,
      tickSpacing: pool.tickSpacing,
      hooks: pool.hooks,
    }));
  }

}
