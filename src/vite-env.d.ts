/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly ENV_API_URL: string;
  readonly ENV_APTOS_CONNECT_DAPP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
