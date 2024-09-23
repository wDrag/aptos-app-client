import { type InputGenerateTransactionPayloadData } from '@aptos-labs/ts-sdk';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useMutation } from '@tanstack/react-query';

import { aptosClient } from '@/aptos';
import { useToast } from '@/components/ui/use-toast';
import { CONTRACT_ADDRESS } from '@/constants';

export const useCreateNewCollectionMutation = () => {
  const { account, signAndSubmitTransaction } = useWallet();
  const { toast } = useToast();

  interface ICreateCollectionProps {
    collectionDescription: string;
    maxSupply: number;
    collectionName: string;
    collectionUri: string;
  }

  return useMutation({
    mutationFn: async (props: ICreateCollectionProps) => {
      if (!account) {
        toast({
          title: 'Error',
          description: 'Please connect your wallet',
        });
        return;
      }

      const { collectionDescription, maxSupply, collectionName, collectionUri } = props;

      const payload: InputGenerateTransactionPayloadData = {
        function: `${CONTRACT_ADDRESS}::digital_asset::create_collection`,
        functionArguments: [collectionDescription, maxSupply, collectionName, collectionUri],
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
