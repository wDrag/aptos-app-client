import { useQuery } from '@tanstack/react-query';

import { getApiClient } from '@/apis';
import { CONTRACT_VIEWS, QUERY_KEYS } from '@/constants';

export const useGetLendingPoolMarketConfigurationQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.LP_GET_MARKET_CONFIGURATION],
    queryFn: async () => {
      const client = getApiClient();

      const { data: response } = await client.post(
        '/view',
        {
          function: CONTRACT_VIEWS.LP_GET_MARKET_CONFIGURATION,
          type_arguments: [null],
          arguments: [],
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
