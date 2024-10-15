import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useQuery } from '@tanstack/react-query';

import { getApiClient } from '@/apis';
import { CONTRACT_VIEWS, MEGA_COIN, QUERY_KEYS } from '@/constants';

export const useGetMockAPTBalanceQuery = () => {
  const { account } = useWallet();

  return useQuery({
    queryKey: [QUERY_KEYS.FAM_GET_BALANCE, account?.address],
    queryFn: async () => {
      const client = getApiClient();

      if (!account) {
        return 0;
      }

      const { data: response } = await client.post(
        '/view',
        {
          function: CONTRACT_VIEWS.MC_GET_BALANCE,
          type_arguments: [MEGA_COIN.MC_COIN_TYPE],
          arguments: [account.address],
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return response[0];
    },
  });
};
