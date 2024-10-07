import { U128, U256, U64 } from '@aptos-labs/ts-sdk';

export const toDecimals = (value: number, decimals: number) => {
  return value * 10 ** decimals;
};

export const fromDecimals = (value: number, decimals: number) => {
  return value / 10 ** decimals;
};

export const toU64 = (value: string | number) => {
  return new U64(BigInt(value.toString()));
};

export const toU128 = (value: string) => {
  return new U128(BigInt(value));
};

export const toU256 = (value: string) => {
  return new U256(BigInt(value));
};
