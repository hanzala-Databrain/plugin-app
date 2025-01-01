/// <reference types="vite/client" />
export declare global {
  interface Window {
    dbn: Record<string, string>;
  }
  namespace JSX {
    interface IntrinsicElements {
      "dbn-dashboard": any;
      "dbn-metric": any;
    }
  }
}
