import { useQuery } from '@tanstack/react-query';

import { getApiClient } from '@/apis';
import { CONTRACT_VIEWS, QUERY_KEYS } from '@/constants';

interface IGetBorrowerInformationProps {
  borrowerAddress: string;
}

export const useGetLendingPoolBorrowerInformationQuery = (props: IGetBorrowerInformationProps) => {
  const { borrowerAddress } = props;

  return useQuery({
    queryKey: [QUERY_KEYS.LP_GET_BORROWER_INFORMATION],
    queryFn: async () => {
      const client = getApiClient();

      const { data: response } = await client.post(
        '/view',
        {
          function: CONTRACT_VIEWS.LP_GET_BORROWER_INFORMATION,
          type_arguments: [],
          arguments: [borrowerAddress],
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
