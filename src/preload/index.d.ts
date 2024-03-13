
declare global {
  interface Window {
    //electron: ElectronAPI
    context: {
      minimize: () => void;
      maximize: () => void;
      close: () => void;
    }
  }
}
