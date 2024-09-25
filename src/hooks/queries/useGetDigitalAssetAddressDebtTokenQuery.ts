import { useQuery } from '@tanstack/react-query';

import { getApiClient } from '@/apis';
import { CONTRACT_VIEWS, QUERY_KEYS } from '@/constants';

interface IGetAddressDebtTokenProps {
  collectionName: string;
  tokenId: number;
}

export const useGetDigitalAssetAddressDebtTokenQuery = (props: IGetAddressDebtTokenProps) => {
  const { collectionName, tokenId } = props;

  return useQuery({
    queryKey: [QUERY_KEYS.DA_GET_ADDRESS_DEBT_TOKEN, collectionName, tokenId],
    queryFn: async () => {
      const client = getApiClient();

      const { data: response } = await client.post(
        '/view',
        {
          function: CONTRACT_VIEWS.DA_GET_ADDRESS_DEBT_TOKEN,
          type_arguments: [null],
          arguments: [collectionName, tokenId],
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
