import { useQuery } from '@tanstack/react-query';

import { getApiClient } from '@/apis';
import { CONTRACT_VIEWS, QUERY_KEYS } from '@/constants';

interface IGetOwnerTokenProps {
  collectionName: string;
  tokenId: number;
}

export const useGetOwnerTokenQuery = (props: IGetOwnerTokenProps) => {
  const { collectionName, tokenId } = props;

  return useQuery({
    queryKey: [QUERY_KEYS.GET_OWNER_TOKEN, collectionName, tokenId],
    queryFn: async () => {
      const client = getApiClient();

      const { data: response } = await client.post(
        '/view',
        {
          function: CONTRACT_VIEWS.GET_OWNER_TOKEN,
          type_arguments: [null],
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
