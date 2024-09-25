import { useQuery } from '@tanstack/react-query';

import { getApiClient } from '@/apis';
import { CONTRACT_VIEWS, QUERY_KEYS } from '@/constants';

interface IGetExchangeOfferProps {
  collectionName: string;
  tokenId: number;
  offerId: number;
}

export const useGetExchangeOfferQuery = (props: IGetExchangeOfferProps) => {
  const { collectionName, tokenId, offerId } = props;

  return useQuery({
    queryKey: [QUERY_KEYS.EX_GET_OFFER],
    queryFn: async () => {
      const client = getApiClient();

      const { data: response } = await client.post(
        '/view',
        {
          function: CONTRACT_VIEWS.EX_GET_OFFER,
          type_arguments: [null],
          arguments: [collectionName, tokenId, offerId],
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
