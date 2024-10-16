import { useQuery } from '@tanstack/react-query';

import { getApiClient } from '@/apis';
import { CONTRACT_VIEWS, QUERY_KEYS } from '@/constants';

interface IGetInstantlyNFTProps {
  indexes: string[];
}

export const useGetExchangeInstantlyNFTQuery = (props: IGetInstantlyNFTProps) => {
  const { indexes } = props;
  return useQuery({
    queryKey: [QUERY_KEYS.EX_GET_INSTANTLY_NFT, indexes],
    queryFn: async () => {
      const client = getApiClient();
      const responses = await Promise.allSettled(
        indexes.map(async (index) => {
          const { data: response } = await client.post(
            '/view',
            {
              function: CONTRACT_VIEWS.EX_GET_INSTANTLY_NFT,
              type_arguments: [],
              arguments: [index],
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          return response;
        })
      );

      const fulfilledResponses = responses.map((response) => {
        if (response.status === 'fulfilled') {
          return response.value;
        }
        return null;
      });

      return fulfilledResponses.filter((response) => response !== null);
    },
  });
};
