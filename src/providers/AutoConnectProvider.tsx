import { type FC, type ReactNode, createContext, useContext, useEffect, useState } from 'react';

const AUTO_CONNECT_LOCAL_STORAGE_KEY = 'AptosWalletAutoConnect';

export interface AutoConnectContextState {
  autoConnect: boolean;
  // eslint-disable-next-line no-unused-vars
  setAutoConnect(autoConnect: boolean): void;
}

export const AutoConnectContext = createContext<AutoConnectContextState>(
  {} as AutoConnectContextState
);

export function useAutoConnect(): AutoConnectContextState {
  return useContext(AutoConnectContext);
}

export const AutoConnectProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [autoConnect, setAutoConnect] = useState(true);

  useEffect(() => {
    // Wait until the app hydrates before populating `autoConnect` from local storage
    try {
      const isAutoConnect = localStorage.getItem(AUTO_CONNECT_LOCAL_STORAGE_KEY);
      if (isAutoConnect) return setAutoConnect(JSON.parse(isAutoConnect));
    } catch (e) {
      if (typeof window !== 'undefined') {
        //eslint-disable-next-line no-console
        console.error(e);
      }
    }
  }, []);

  useEffect(() => {
    try {
      if (!autoConnect) {
        localStorage.removeItem(AUTO_CONNECT_LOCAL_STORAGE_KEY);
      } else {
        localStorage.setItem(AUTO_CONNECT_LOCAL_STORAGE_KEY, JSON.stringify(autoConnect));
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (typeof window !== 'undefined') {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }
  }, [autoConnect]);

  return (
    <AutoConnectContext.Provider value={{ autoConnect, setAutoConnect }}>
      {children}
    </AutoConnectContext.Provider>
  );
};
