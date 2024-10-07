import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants';

import { useGetDigitalAssetTokensDataQuery } from './useGetDigitalAssetTokensDataQuery';
import { useGetExchangeInstantlyNFTQuery } from './useGetExchangeInstantlyNFTQuery';
import { useGetExchangeNumbersInstantlyNFTQuery } from './useGetExchangeNumbersInstantlyNFTQuery';

export const useGetExchangeAllInstantlyNFTQuery = () => {
  const { data: numberOfInstantlyNFT, isLoading: isLoadingNumber } =
    useGetExchangeNumbersInstantlyNFTQuery();

  const parsedNumberOfInstantlyNFT = numberOfInstantlyNFT ? parseInt(numberOfInstantlyNFT[0]) : 0;

  const indexes = Array.from(Array(parsedNumberOfInstantlyNFT).keys(), (i) => i.toString());

  const { data: instantlyNFTList, isLoading: isLoadingList } = useGetExchangeInstantlyNFTQuery({
    indexes,
  });

  const { data: allNFTList = [], isLoading: isLoadingInfo } = useGetDigitalAssetTokensDataQuery({
    tokenInfos: instantlyNFTList?.map((nftInfos) => ({
      collectionName: nftInfos[0],
      tokenId: nftInfos[1],
    })),
  });

  return useQuery({
    queryKey: [
      QUERY_KEYS.EX_GET_ALL_INSTANTLY_NFT,
      isLoadingNumber || isLoadingList || isLoadingInfo,
    ],
    queryFn: () => {
      if (allNFTList.length === 0) {
        return [];
      }

      return allNFTList;
    },
  });
};
