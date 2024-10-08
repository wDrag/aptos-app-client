import { type InputGenerateTransactionPayloadData } from '@aptos-labs/ts-sdk';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { aptosClient } from '@/aptos';
import { useToast } from '@/components/ui/use-toast';
import { CONTRACT_FUNCTIONS, MEGA_COIN, QUERY_KEYS } from '@/constants';
import { toU64 } from '@/lib';

export const useExchangeBuyWithFullPaymentMutation = () => {
  const { account, signAndSubmitTransaction } = useWallet();
  const { toast } = useToast();

  interface IExchangeBuyWithFullPaymentMutation {
    collectionName: string;
    tokenId: string;
  }

  const queryClient = useQueryClient();

  const refetchData = () => {
    queryClient.invalidateQueries({
      queryKey: [QUERY_KEYS.EX_GET_NUMBERS_INSTANTLY_NFT],
    });
  };

  return useMutation({
    mutationFn: async (props: IExchangeBuyWithFullPaymentMutation) => {
      if (!account) {
        toast({
          title: 'Error',
          description: 'Please connect your wallet',
        });
        return;
      }

      const { collectionName, tokenId } = props;

      const payload: InputGenerateTransactionPayloadData = {
        function: CONTRACT_FUNCTIONS.EX_BUY_WITH_FULL_PAYMENT,
        functionArguments: [collectionName, toU64(tokenId)],
        typeArguments: [MEGA_COIN.MC_COIN_TYPE],
      };

      const response = await signAndSubmitTransaction({
        sender: account.address,
        data: payload,
      });

      try {
        await aptosClient.waitForTransaction(response.hash);
        refetchData();
        toast({
          title: 'Success',
          description: 'Transaction submitted',
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error', error);
        refetchData();
        toast({
          title: 'Error',
          description: 'Transaction failed',
        });
      }
    },
  });
};
