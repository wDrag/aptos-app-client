import { useQuery } from '@tanstack/react-query';

import { getApiClient } from '@/apis';
import { CONTRACT_VIEWS, QUERY_KEYS } from '@/constants';

interface IGetAddressTokenProps {
  collectionName: string;
  tokenId: number;
}

export const useGetAddressTokenQuery = (props: IGetAddressTokenProps) => {
  const { collectionName, tokenId } = props;

  return useQuery({
    queryKey: [QUERY_KEYS.GET_ADDRESS_TOKEN, collectionName, tokenId],
    queryFn: async () => {
      const client = getApiClient();

      const { data: response } = await client.post(
        '/view',
        {
          function: CONTRACT_VIEWS.GET_ADDRESS_TOKEN,
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
