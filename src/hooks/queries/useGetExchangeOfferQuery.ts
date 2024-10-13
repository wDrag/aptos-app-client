import { useQuery } from '@tanstack/react-query';

import { getApiClient } from '@/apis';
import { CONTRACT_VIEWS, QUERY_KEYS } from '@/constants';

interface IGetExchangeOfferProps {
  collectionName: string;
  tokenId: string;
  offerIds: string[];
}

export const useGetExchangeOfferQuery = (props: IGetExchangeOfferProps) => {
  const { collectionName, tokenId, offerIds } = props;

  return useQuery({
    queryKey: [QUERY_KEYS.EX_GET_OFFER, collectionName, tokenId, offerIds],
    queryFn: async () => {
      const client = getApiClient();

      const responses = await Promise.all(
        offerIds.map(async (offerId) => {
          const { data: response } = await client.post(
            '/view',
            {
              function: CONTRACT_VIEWS.EX_GET_OFFER,
              type_arguments: [],
              arguments: [collectionName, tokenId, offerId],
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

          return {
            offerOwner: response[0],
            offerPrice: response[1],
            offerTime: response[2],
          };
        })
      );

      return responses;
    },
  });
};
