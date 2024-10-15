export const getUrl = (path: string) => {
  return `${window.location.origin}${path}`;
};

export const fromIpfs = (ipfsUri?: string) => {
  if (!ipfsUri) return '';

  if (!ipfsUri.startsWith('ipfs://')) {
    return ipfsUri;
  }
  return (
    ipfsUri.replace('ipfs://', 'https://tradeport.mypinata.cloud/ipfs/') +
    'https://tradeport.mypinata.cloud/ipfs/QmTBduDDEJRzXhXUtYwK6YtD4N6keCBXtLKz4p4nex1MHe?pinataGatewayToken=sd9Ceh-eJIQ43PRB3JW6QGkHAr8-cxGhhjDF0Agxwd_X7N4_reLPQXZSP_vUethU&img-width=500&img-height=500&img-fit=cover&img-quality=80&img-onerror=redirect&img-fit=pad&img-format=webp'
  );
};
