import { type InputGenerateTransactionPayloadData } from '@aptos-labs/ts-sdk';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useMutation } from '@tanstack/react-query';

import { aptosClient } from '@/aptos';
import { useToast } from '@/components/ui/use-toast';
import { CONTRACT_FUNCTIONS, MEGA_COIN, MEGA_COIN_DECIMALS } from '@/constants';

export const useLendingPoolWithdrawMutation = () => {
  const { account, signAndSubmitTransaction } = useWallet();
  const { toast } = useToast();

  interface ILendingPoolWithdrawMutation {
    amount: number;
  }

  return useMutation({
    mutationFn: async (props: ILendingPoolWithdrawMutation) => {
      if (!account) {
        toast({
          title: 'Error',
          description: 'Please connect your wallet',
        });
        return;
      }

      const { amount } = props;

      const payload: InputGenerateTransactionPayloadData = {
        function: CONTRACT_FUNCTIONS.LP_WITHDRAW,
        functionArguments: [amount * MEGA_COIN_DECIMALS],
        typeArguments: [MEGA_COIN.MC_COIN_TYPE],
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
