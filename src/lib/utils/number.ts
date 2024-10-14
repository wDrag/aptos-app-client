import { U128, U256, U64 } from '@aptos-labs/ts-sdk';

export const toDecimals = (value: number, decimals: number) => {
  return value * 10 ** decimals;
};

export const fromDecimals = (value: number, decimals: number) => {
  return value / 10 ** decimals;
};

export const formatNumber = (value: number, fixed = 2) => {
  return value.toFixed(fixed);
};

export const toU64 = (value: string | number) => {
  return new U64(BigInt(value.toString()));
};

export const toU128 = (value: string) => {
  return new U128(BigInt(value));
};

export const toU256 = (value: string | number) => {
  return new U256(BigInt(value.toString()));
};

export const tryParseInt = (value: string) => {
  const parsedValue = parseInt(value);
  if (isNaN(parsedValue)) {
    return 0;
  }
  return parsedValue;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onValueChange = (e: any, setter: any) => {
  const rawValue = e?.target?.value;
  let cleanValue = rawValue.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
  const dotIndex = cleanValue.indexOf('.');
  if (dotIndex !== -1) {
    const beforeDot = cleanValue.slice(0, dotIndex + 1);
    const afterDot = cleanValue.slice(dotIndex + 1).replace(/\./g, '');
    cleanValue = beforeDot + afterDot;
  }
  const parsedValue = parseInt(cleanValue);
  if (isNaN(parsedValue)) {
    setter('');
    return;
  }
  setter(cleanValue.toString());
};
