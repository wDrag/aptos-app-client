import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants';

import { useGetDigitalAssetTokensDataQuery } from './useGetDigitalAssetTokensDataQuery';
import { useGetLendingPoolCollateralNumbersQuery } from './useGetLendingPoolCollateralNumbersQuery';
import { useGetLendingPoolCollateralQuery } from './useGetLendingPoolCollateralQuery';

export const useGetLendingPoolAllCollateralQuery = () => {
  const { account } = useWallet();

  const { data: numberOfCollateral = 0, isLoading: isLoadingNumber } =
    useGetLendingPoolCollateralNumbersQuery({
      ownerAddress: account?.address || '',
    });

  const parsedNumberOfCollateral = numberOfCollateral ? parseInt(numberOfCollateral[0]) : 0;

  const indexes = Array.from(Array(parsedNumberOfCollateral).keys(), (i) => i.toString());

  const { data: collateralsList = [], isLoading: isLoadingList } = useGetLendingPoolCollateralQuery(
    {
      ownerAddress: account?.address || '',
      indexes,
    }
  );

  const { data: allNFTList = [], isLoading: isLoadingInfo } = useGetDigitalAssetTokensDataQuery({
    tokenInfos: collateralsList.map((nftInfos) => ({
      collectionName: nftInfos.collectionName,
      tokenId: nftInfos.tokenId,
    })),
  });

  return useQuery({
    queryKey: [QUERY_KEYS.LP_GET_ALL_COLLATERAL, isLoadingNumber || isLoadingList || isLoadingInfo],
    queryFn: () => {
      if (allNFTList.length === 0) {
        return [];
      }

      return allNFTList;
    },
  });
};
