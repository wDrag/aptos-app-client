import { type InputGenerateTransactionPayloadData } from '@aptos-labs/ts-sdk';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useMutation } from '@tanstack/react-query';

import { aptosClient } from '@/aptos';
import { useToast } from '@/components/ui/use-toast';
import { CONTRACT_FUNCTIONS, MEGA_COIN } from '@/constants';
import { toU64 } from '@/lib';

export const useExchangeListInstantlyNFTMutation = () => {
  const { account, signAndSubmitTransaction } = useWallet();
  const { toast } = useToast();

  interface IExchangeListInstantlyNFTMutation {
    collectionName: string;
    tokenId: string;
  }

  return useMutation({
    mutationFn: async (props: IExchangeListInstantlyNFTMutation) => {
      if (!account) {
        toast({
          title: 'Error',
          description: 'Please connect your wallet',
        });
        return;
      }

      const { collectionName, tokenId } = props;

      const payload: InputGenerateTransactionPayloadData = {
        function: CONTRACT_FUNCTIONS.EX_LIST_INSTANTLY_NFT,
        functionArguments: [collectionName, toU64(tokenId)],
        typeArguments: [MEGA_COIN.MC_COIN_TYPE],
      };

      const response = await signAndSubmitTransaction({
        sender: account.address,
        data: payload,
      });

      try {
        const txHash = response.hash;
        await aptosClient.waitForTransaction(txHash);
        toast({
          title: 'Success',
          description: 'Transaction submitted',
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        toast({
          title: 'Error',
          description: 'Transaction failed',
        });
      }
    },
  });
};
