import { useQuery } from '@tanstack/react-query';

import { getApiClient } from '@/apis';
import { CONTRACT_VIEWS, QUERY_KEYS } from '@/constants';

interface IGetOracleFloorPriceProps {
  ownerAddress: string;
  collectionName: string;
  tokenId: number;
}

export const useGetOracleFloorPriceQuery = (props: IGetOracleFloorPriceProps) => {
  const { ownerAddress, collectionName, tokenId } = props;

  return useQuery({
    queryKey: [QUERY_KEYS.ORACLE_GET_FLOOR_PRICE, ownerAddress, collectionName, tokenId],
    queryFn: async () => {
      const client = getApiClient();

      const { data: response } = await client.post(
        '/view',
        {
          function: CONTRACT_VIEWS.ORACLE_GET_FLOOR_PRICE,
          type_arguments: [null],
          arguments: [ownerAddress, collectionName, tokenId],
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
