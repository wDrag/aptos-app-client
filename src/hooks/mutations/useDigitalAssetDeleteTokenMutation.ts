import { type InputGenerateTransactionPayloadData } from '@aptos-labs/ts-sdk';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useMutation } from '@tanstack/react-query';

import { aptosClient } from '@/aptos';
import { useToast } from '@/components/ui/use-toast';
import { CONTRACT_FUNCTIONS } from '@/constants';
import { toU64 } from '@/lib';

export const useDigitalAssetDeleteTokenMutation = () => {
  const { account, signAndSubmitTransaction } = useWallet();
  const { toast } = useToast();

  interface IDigitalAssetDeleteTokenProps {
    collectionName: string;
    tokenId: string;
  }

  return useMutation({
    mutationFn: async (props: IDigitalAssetDeleteTokenProps) => {
      if (!account) {
        toast({
          title: 'Error',
          description: 'Please connect your wallet',
        });
        return;
      }

      const { collectionName, tokenId } = props;

      const payload: InputGenerateTransactionPayloadData = {
        function: CONTRACT_FUNCTIONS.DA_DELETE_TOKEN,
        functionArguments: [collectionName, toU64(tokenId)],
      };

      const { data: response } = await signAndSubmitTransaction({
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
