import { AccountAddress } from '@aptos-labs/ts-sdk';

export const getIdFromName = (name: string) => {
  const splited = name.split('#');
  return splited[splited.length - 1];
};

export const getNameWithoutId = (name: string) => {
  const splited = name.split('#');
  return splited[0];
};

export const toAddress = (name: string) => {
  return AccountAddress.fromString(name);
};

export const toShortAddress = (address: string) => {
  return address.slice(0, 4) + '...' + address.slice(-4);
};
