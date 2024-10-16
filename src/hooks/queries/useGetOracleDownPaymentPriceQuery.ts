import { useQuery } from '@tanstack/react-query';

import { getApiClient } from '@/apis';
import { ADMIN_ADDRESS, ORACLE_FUNCTIONS, QUERY_KEYS } from '@/constants';

interface IGetOracleDownPaymentPriceProps {
  ownerAddress: string;
  collectionName: string;
  tokenId: string;
}

export const useGetOracleDownPaymentPriceQuery = (props: IGetOracleDownPaymentPriceProps) => {
  const { ownerAddress, collectionName, tokenId } = props;

  return useQuery({
    queryKey: [QUERY_KEYS.ORACLE_GET_DOWN_PAYMENT_PRICE, ownerAddress, collectionName, tokenId],
    queryFn: async () => {
      const client = getApiClient();

      const { data: response } = await client.post(
        '/view',
        {
          function: ORACLE_FUNCTIONS.ORACLE_GET_DOWN_PAYMENT_PRICE,
          type_arguments: [],
          arguments: [ADMIN_ADDRESS, collectionName, tokenId],
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 3000,
        }
      );

      return response;
    },
    staleTime: 3000,
  });
};
