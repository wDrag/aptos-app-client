import { useQuery } from '@tanstack/react-query';

import { getApiClient } from '@/apis';
import { CONTRACT_VIEWS, QUERY_KEYS } from '@/constants';
import { NFT } from '@/types';

interface IGetTokenDataProps {
  tokenInfos?: {
    collectionName: string;
    tokenId: string;
  }[];
}

export const useGetDigitalAssetTokensDataQuery = (props: IGetTokenDataProps) => {
  const { tokenInfos } = props;

  return useQuery({
    queryKey: [QUERY_KEYS.DA_GET_TOKEN_DATA, tokenInfos?.join(',')],
    queryFn: async () => {
      if (!tokenInfos) {
        return [];
      }
      const client = getApiClient();
      const responses = await Promise.all(
        tokenInfos.map(async (tokenInfo) => {
          const { data: response } = await client.post(
            '/view',
            {
              function: CONTRACT_VIEWS.DA_GET_TOKEN_DATA,
              type_arguments: [],
              arguments: [tokenInfo.collectionName, tokenInfo.tokenId],
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

          const { data: ownerAddressResponse } = await client.post(
            '/view',
            {
              function: CONTRACT_VIEWS.DA_GET_OWNER_TOKEN,
              type_arguments: [],
              arguments: [tokenInfo.collectionName, tokenInfo.tokenId],
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

          return {
            ownerAddress: ownerAddressResponse[0],
            collectionName: tokenInfo.collectionName,
            tokenName: response[0],
            tokenId: tokenInfo.tokenId,
            tokenUri: response[2],
          } satisfies NFT;
        })
      );
      return responses;
    },
  });
};
