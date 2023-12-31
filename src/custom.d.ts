declare module '*.svg';
declare module '*.css';
declare module '*.ico';

interface ElectronBridge {
  minimizeApp: () => void;
  closeApp: () => void;
  maximizeApp: () => void;
  unmaximizeApp: () => void;
  addWindowStateListener: (cb: (isMaximized: boolean) => void) => void;
  isWindowMaximized: () => boolean;
  openMainWindow: () => void;
  openLoginWindow: () => void;
  navigateTo: (path: string) => void;
  downloadFiles: (urls: string[]) => void;
  onFinishDownloadFiles: (cb: (isSuccess: boolean) => void) => void;
  onError: (cb: (message: string) => void) => void;
}
interface Window {
  electron: ElectronBridge;
}
