import { useQuery } from '@tanstack/react-query';

import { getApiClient } from '@/apis';
import { CONTRACT_VIEWS, QUERY_KEYS } from '@/constants';

interface IGetCollateralProps {
  ownerAddress: string;
  index: string;
}

export const useGetLendingPoolCollateralQuery = (props: IGetCollateralProps) => {
  const { ownerAddress, index } = props;

  return useQuery({
    queryKey: [QUERY_KEYS.LP_GET_COLLATERAL],
    queryFn: async () => {
      const client = getApiClient();

      const { data: response } = await client.post(
        '/view',
        {
          function: CONTRACT_VIEWS.LP_GET_COLLATERAL,
          type_arguments: [],
          arguments: [ownerAddress, index],
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
