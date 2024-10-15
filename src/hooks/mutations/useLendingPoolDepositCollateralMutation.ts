import { type InputGenerateTransactionPayloadData } from '@aptos-labs/ts-sdk';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useMutation } from '@tanstack/react-query';

import { aptosClient } from '@/aptos';
import { useToast } from '@/components/ui/use-toast';
import { CONTRACT_FUNCTIONS } from '@/constants';

export const useLendingPoolDepositCollateralMutation = () => {
  const { account, signAndSubmitTransaction } = useWallet();
  const { toast } = useToast();

  interface ILendingPoolDepositCollateralProps {
    data: string[];
  }

  return useMutation({
    mutationFn: async (props: ILendingPoolDepositCollateralProps) => {
      if (!account) {
        toast({
          title: 'Error',
          description: 'Please connect your wallet',
        });
        return;
      }

      const { data } = props;

      const payload: InputGenerateTransactionPayloadData = {
        function: CONTRACT_FUNCTIONS.LP_DEPOSIT_COLLATERAL,
        functionArguments: [data],
      };

      const response = await signAndSubmitTransaction({
        sender: account.address,
        data: payload,
      });

      try {
        aptosClient.waitForTransaction(response.hash);
        toast({
          title: 'Success',
          description: 'Transaction submitted',
        });
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Transaction failed',
        });
      }
    },
  });
};
