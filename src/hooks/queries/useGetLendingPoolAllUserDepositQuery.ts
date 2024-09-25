import { useQuery } from '@tanstack/react-query';

import { getApiClient } from '@/apis';
import { CONTRACT_VIEWS, QUERY_KEYS } from '@/constants';

export const useGetLendingPoolAllUserDepositQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.LP_GET_ALL_USER_DEPOSIT],
    queryFn: async () => {
      const client = getApiClient();

      const { data: response } = await client.post(
        '/view',
        {
          function: CONTRACT_VIEWS.LP_GET_ALL_USER_DEPOSIT,
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
