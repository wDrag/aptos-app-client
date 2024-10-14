import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants';

import { useGetExchangeNumberOffersQuery } from './useGetExchangeNumberOffersQuery';
import { useGetExchangeOfferQuery } from './useGetExchangeOfferQuery';

type IGetExchangeAllOfferQueryProps = {
  collectionName: string;
  tokenId: string;
};

export const useGetExchangeAllOfferQuery = (props: IGetExchangeAllOfferQueryProps) => {
  const { collectionName, tokenId } = props;
  const { data: numberOfOffer, isLoading: isLoadingNumber } = useGetExchangeNumberOffersQuery({
    collectionName,
    tokenId,
  });

  const parsedNumberOfOffer = numberOfOffer ? parseInt(numberOfOffer[0]) : 0;

  const indexes = Array.from(Array(parsedNumberOfOffer).keys(), (i) => i.toString());

  const { data: offerList = [], isLoading: isLoadingList } = useGetExchangeOfferQuery({
    collectionName,
    tokenId,
    offerIds: indexes,
  });

  return useQuery({
    queryKey: [QUERY_KEYS.EX_GET_ALL_OFFER, isLoadingNumber || isLoadingList],
    queryFn: () => {
      return offerList;
    },
  });
};
