import { AccountAddress } from '@aptos-labs/ts-sdk';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { useQuery } from '@tanstack/react-query';

import { aptosClient } from '@/aptos';
import { QUERY_KEYS } from '@/constants';
import { getIdFromName } from '@/lib';
import { NFT } from '@/types';

export const useTokensQuery = () => {
  const { account } = useWallet();

  return useQuery({
    queryKey: [QUERY_KEYS.GET_TOKENS, account?.address],
    queryFn: async () => {
      if (!account?.address) {
        return [];
      }

      const tokensData = await aptosClient.getAccountOwnedTokens({
        accountAddress: AccountAddress.fromString(account.address),
      });

      const filteredTokensData = tokensData.filter(
        (token) => token.current_token_data?.current_collection?.collection_name !== 'Megaloandon'
      );

      return filteredTokensData.map((token) => {
        return {
          ownerAddress: token.owner_address,
          collectionName: token.current_token_data?.current_collection?.collection_name || '',
          tokenName: token.current_token_data?.token_name || '',
          tokenId: getIdFromName(token.current_token_data?.token_name || ''),
          tokenUri: token.current_token_data?.token_uri || '',
        } satisfies NFT;
      });
    },
  });
};
