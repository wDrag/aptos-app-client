import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useQuery } from '@tanstack/react-query';

import { getApiClient } from '@/apis';
import { CONTRACT_VIEWS, QUERY_KEYS } from '@/constants';

export const useGetMockAPTBalanceQuery = () => {
  const { account } = useWallet();

  return useQuery({
    queryKey: [QUERY_KEYS.FAM_GET_BALANCE],
    queryFn: async () => {
      const client = getApiClient();

      if (!account) {
        return 0;
      }

      const { data: response } = await client.post(
        '/view',
        {
          function: CONTRACT_VIEWS.FAM_GET_BALANCE,
          type_arguments: [],
          arguments: [account.address, 'Megaloandon APT', 'mAPT'],
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
