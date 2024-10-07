import { AccountAddress } from '@aptos-labs/ts-sdk';

export const getIdFromName = (name: string) => {
  const splited = name.split('#');
  return splited[splited.length - 1];
};

export const toAddress = (name: string) => {
  return AccountAddress.fromString(name);
};
