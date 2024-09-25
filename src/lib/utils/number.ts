export const toDecimals = (value: number, decimals: number) => {
  return value * 10 ** decimals;
};

export const fromDecimals = (value: number, decimals: number) => {
  return value / 10 ** decimals;
};
