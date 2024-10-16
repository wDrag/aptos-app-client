import { useQuery } from '@tanstack/react-query';

import { getApiClient } from '@/apis';
import { ORACLE_FUNCTIONS, QUERY_KEYS } from '@/constants';

interface IGetOracleFloorPriceProps {
  ownerAddress: string;
  collectionName: string;
  tokenId: string;
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
          function: ORACLE_FUNCTIONS.ORACLE_GET_FLOOR_PRICE,
          type_arguments: [],
          arguments: [collectionName, tokenId],
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      return parseInt(response[0]);
    },
  });
};
