import { type InputGenerateTransactionPayloadData } from '@aptos-labs/ts-sdk';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useMutation } from '@tanstack/react-query';

import { aptosClient } from '@/aptos';
import { useToast } from '@/components/ui/use-toast';
import { CONTRACT_FUNCTIONS, MEGA_COIN, MEGA_COIN_DECIMALS } from '@/constants';
import { toDecimals } from '@/lib';

export const useExchangeAddOfferMutation = () => {
  const { account, signAndSubmitTransaction } = useWallet();
  const { toast } = useToast();

  interface IExchangeAddOfferMutation {
    collectionName: string;
    tokenId: string;
    offerPrice: number;
    offerTime: number;
  }

  return useMutation({
    mutationFn: async (props: IExchangeAddOfferMutation) => {
      if (!account) {
        toast({
          title: 'Error',
          description: 'Please connect your wallet',
        });
        return;
      }

      const { collectionName, tokenId, offerPrice, offerTime } = props;

      const payload: InputGenerateTransactionPayloadData = {
        function: CONTRACT_FUNCTIONS.EX_ADD_OFFER,
        functionArguments: [
          collectionName,
          tokenId,
          toDecimals(offerPrice, MEGA_COIN_DECIMALS),
          offerTime,
        ],
        typeArguments: [MEGA_COIN.MC_COIN_TYPE],
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
