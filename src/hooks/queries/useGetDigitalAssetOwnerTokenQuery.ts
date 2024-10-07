import { useQuery } from '@tanstack/react-query';

import { getApiClient } from '@/apis';
import { CONTRACT_VIEWS, QUERY_KEYS } from '@/constants';

interface IGetOwnerTokenProps {
  collectionName: string;
  tokenId: string;
}

export const useGetDigitalAssetOwnerTokenQuery = (props: IGetOwnerTokenProps) => {
  const { collectionName, tokenId } = props;

  return useQuery({
    queryKey: [QUERY_KEYS.DA_GET_OWNER_TOKEN, collectionName, tokenId],
    queryFn: async () => {
      const client = getApiClient();

      const { data: response } = await client.post(
        '/view',
        {
          function: CONTRACT_VIEWS.DA_GET_OWNER_TOKEN,
          type_arguments: [],
          arguments: [collectionName, tokenId],
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      return response;
    },
  });
};
