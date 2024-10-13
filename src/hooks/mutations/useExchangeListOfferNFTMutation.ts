import { type InputGenerateTransactionPayloadData } from '@aptos-labs/ts-sdk';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { aptosClient } from '@/aptos';
import { useToast } from '@/components/ui/use-toast';
import { CONTRACT_FUNCTIONS, QUERY_KEYS } from '@/constants';
import { toU64 } from '@/lib';

export const useExchangeListOfferNFTMutation = () => {
  const { account, signAndSubmitTransaction } = useWallet();
  const { toast } = useToast();

  const queryClient = useQueryClient();

  const refetchData = async (closeModal: () => void) => {
    await queryClient.invalidateQueries({
      queryKey: [QUERY_KEYS.EX_GET_NUMBERS_OFFERS_NFT],
    });
    closeModal();
  };

  interface IExchangeListOfferNFTMutation {
    collectionName: string;
    tokenId: string;
    closeModal: () => void;
  }

  return useMutation({
    mutationFn: async (props: IExchangeListOfferNFTMutation) => {
      if (!account) {
        toast({
          title: 'Error',
          description: 'Please connect your wallet',
        });
        return;
      }

      const { collectionName, tokenId, closeModal } = props;

      const payload: InputGenerateTransactionPayloadData = {
        function: CONTRACT_FUNCTIONS.EX_LIST_OFFER_NFT,
        functionArguments: [collectionName, toU64(tokenId)],
      };

      const response = await signAndSubmitTransaction({
        sender: account.address,
        data: payload,
      });

      try {
        await aptosClient.waitForTransaction({ transactionHash: response.hash });
        await refetchData(closeModal);
        toast({
          title: 'Success',
          description: 'Transaction submitted',
        });
      } catch (error) {
        await refetchData(closeModal);
        toast({
          title: 'Error',
          description: 'Transaction failed',
        });
      }
    },
  });
};
