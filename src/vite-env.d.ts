/// <reference types="vite/client" />

declare module '*.png' {
  const src: string;
  export default src;
}

interface ImportMetaEnv {
  readonly VITE_SANDBOX_USER: string;
  readonly VITE_SANDBOX_PASSWORD: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
