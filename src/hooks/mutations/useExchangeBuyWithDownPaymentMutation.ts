import { type InputGenerateTransactionPayloadData } from '@aptos-labs/ts-sdk';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { aptosClient } from '@/aptos';
import { useToast } from '@/components/ui/use-toast';
import { CONTRACT_FUNCTIONS, MEGA_COIN, QUERY_KEYS } from '@/constants';
import { toU64 } from '@/lib';

export const useExchangeBuyWithDownPaymentMutation = () => {
  const { account, signAndSubmitTransaction } = useWallet();
  const { toast } = useToast();

  const queryClient = useQueryClient();

  const refetchData = () => {
    queryClient.invalidateQueries({
      queryKey: [QUERY_KEYS.EX_GET_NUMBERS_INSTANTLY_NFT],
    });
  };

  interface IExchangeBuyWithDownPaymentMutation {
    collectionName: string;
    tokenId: string;
  }

  return useMutation({
    mutationFn: async (props: IExchangeBuyWithDownPaymentMutation) => {
      if (!account) {
        toast({
          title: 'Error',
          description: 'Please connect your wallet',
        });
        return;
      }

      const { collectionName, tokenId } = props;

      const payload: InputGenerateTransactionPayloadData = {
        function: CONTRACT_FUNCTIONS.EX_BUY_WITH_DOWN_PAYMENT,
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
