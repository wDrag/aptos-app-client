import { useQuery } from '@tanstack/react-query';

import { getApiClient } from '@/apis';
import { CONTRACT_VIEWS, QUERY_KEYS } from '@/constants';

interface IGetNumbersInstantlyNFTProps {
  index: number;
}

export const useGetExchangeNumbersInstantlyNFTQuery = (props: IGetNumbersInstantlyNFTProps) => {
  const { index } = props;
  return useQuery({
    queryKey: [QUERY_KEYS.EX_GET_NUMBERS_INSTANTLY_NFT],
    queryFn: async () => {
      const client = getApiClient();

      const { data: response } = await client.post(
        '/view',
        {
          function: CONTRACT_VIEWS.EX_GET_NUMBERS_INSTANTLY_NFT,
          type_arguments: [null],
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
