import { Network } from '@aptos-labs/ts-sdk';
import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react';
import { BitgetWallet } from '@bitget-wallet/aptos-wallet-adapter';
import { MartianWallet } from '@martianwallet/aptos-wallet-adapter';
import { MSafeWalletAdapter } from '@msafe/aptos-wallet-adapter';
import { OKXWallet } from '@okwallet/aptos-wallet-adapter';
import { PontemWallet } from '@pontem/wallet-adapter-plugin';
import { TrustWallet } from '@trustwallet/aptos-wallet-adapter';
import { FewchaWallet } from 'fewcha-plugin-wallet-adapter';
import { type PropsWithChildren } from 'react';

import { useToast } from '@/components/ui/use-toast';
import { useAutoConnect } from '@/providers/AutoConnectProvider';

export const WalletProvider = ({ children }: PropsWithChildren) => {
  const { autoConnect } = useAutoConnect();
  const { toast } = useToast();

  const wallets = [
    new BitgetWallet(),
    new FewchaWallet(),
    new MartianWallet(),
    new MSafeWalletAdapter(),
    new PontemWallet(),
    new TrustWallet(),
    new OKXWallet(),
  ];

  return (
    <AptosWalletAdapterProvider
      autoConnect={autoConnect}
      plugins={wallets}
      dappConfig={{
        network: Network.TESTNET,
        aptosConnectDappId: import.meta.env.ENV_APTOS_CONNECT_DAPP_ID,
      }}
      onError={(error) => {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: error || 'Unknown wallet error',
        });
      }}
    >
      {children}
    </AptosWalletAdapterProvider>
  );
};
