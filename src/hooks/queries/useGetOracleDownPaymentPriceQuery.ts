import { useQuery } from '@tanstack/react-query';

import { getApiClient } from '@/apis';
import { CONTRACT_VIEWS, QUERY_KEYS } from '@/constants';

interface IGetOracleDownPaymentPriceProps {
  ownerAddress: string;
  collectionName: string;
  tokenId: number;
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
          function: CONTRACT_VIEWS.ORACLE_GET_DOWN_PAYMENT_PRICE,
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
