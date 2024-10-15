export const getUrl = (path: string) => {
  return `${window.location.origin}${path}`;
};

export const fromIpfs = (ipfsUri?: string) => {
  if (!ipfsUri) return '';

  if (!ipfsUri.startsWith('ipfs://')) {
    return ipfsUri;
  }
  return ipfsUri.replace('ipfs://', 'https://gateway.pinata.cloud/ipfs/');
};
