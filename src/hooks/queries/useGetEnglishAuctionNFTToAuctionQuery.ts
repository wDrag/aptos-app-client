import { useQuery } from '@tanstack/react-query';

import { getApiClient } from '@/apis';
import { CONTRACT_VIEWS, QUERY_KEYS } from '@/constants';

interface IGetNFTToAuctionProps {
  index: string;
}

export const useGetEnglishAuctionNFTToAuctionQuery = (props: IGetNFTToAuctionProps) => {
  const { index } = props;

  return useQuery({
    queryKey: [QUERY_KEYS.EA_GET_NFT_TO_AUCTION, index],
    queryFn: async () => {
      const client = getApiClient();

      const { data: response } = await client.post(
        '/view',
        {
          function: CONTRACT_VIEWS.EA_GET_MINIMUM_BID,
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
    },
  });
};
