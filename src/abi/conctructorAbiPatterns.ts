// Common ABI patterns to reduce duplication
export const BASIC_ADAPTER_ABI = [
  { type: "address", name: "creditManager" },
  { type: "address", name: "target" },
] as const;

export const ADDRESS_ADAPTER_ABI = [
  { type: "address", name: "creditManager" },
  { type: "address", name: "target" },
  { type: "address", name: "" },
] as const;

// Curve ABI patterns
export const CURVE_V1_ADAPTER_310_ABI = [
  { type: "address", name: "creditManager" },
  { type: "address", name: "target" },
  { type: "address", name: "lpToken" },
  { type: "address", name: "basePool" },
] as const;

export const CURVE_V1_ADAPTER_311_ABI = [
  { type: "address", name: "creditManager" },
  { type: "address", name: "target" },
  { type: "address", name: "lpToken" },
  { type: "address", name: "basePool" },
  { type: "bool", name: "use256" },
] as const;

export const CURVE_V1_WRAPPER_ADAPTER_ABI = [
  { type: "address", name: "creditManager" },
  { type: "address", name: "target" },
  { type: "address", name: "lpToken" },
  { type: "uint256", name: "nCoins" },
] as const;

// Other ABI patterns
export const ERC4626_REFERRAL_ADAPTER_ABI = [
  { type: "address", name: "creditManager" },
  { type: "address", name: "target" },
  { type: "uint16", name: "referral" },
] as const;

export const STAKING_REWARDS_ADAPTER_ABI = [
  { type: "address", name: "creditManager" },
  { type: "address", name: "target" },
  { type: "address", name: "stakedPhantomToken" },
  { type: "uint16", name: "referral" },
] as const;
