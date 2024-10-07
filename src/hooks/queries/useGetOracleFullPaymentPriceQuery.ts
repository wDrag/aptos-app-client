import { useQuery } from '@tanstack/react-query';

import { getApiClient } from '@/apis';
import { ORACLE_FUNCTIONS, QUERY_KEYS } from '@/constants';

interface IGetOracleFullPaymentPriceProps {
  ownerAddress: string;
  collectionName: string;
  tokenId: string;
}
export const useGetOracleFullPaymentPriceQuery = (props: IGetOracleFullPaymentPriceProps) => {
  const { ownerAddress, collectionName, tokenId } = props;

  return useQuery({
    queryKey: [QUERY_KEYS.ORACLE_GET_FULL_PAYMENT_PRICE, ownerAddress, collectionName, tokenId],
    queryFn: async () => {
      const client = getApiClient();

      const { data: response } = await client.post(
        '/view',
        {
          function: ORACLE_FUNCTIONS.ORACLE_GET_FULL_PAYMENT_PRICE,
          type_arguments: [],
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
