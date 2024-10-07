import { useQuery } from '@tanstack/react-query';

import { getApiClient } from '@/apis';
import { CONTRACT_VIEWS, QUERY_KEYS } from '@/constants';

export const useGetEnglishAuctionNumbersNFTToAuctionQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.EA_GET_NUMBER_NFT_TO_AUCTION],
    queryFn: async () => {
      const client = getApiClient();

      const { data: response } = await client.post(
        '/view',
        {
          function: CONTRACT_VIEWS.EA_GET_NUMBER_NFT_TO_AUCTION,
          type_arguments: [],
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
