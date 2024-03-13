import { BrowserWindow } from 'electron';

export const closeWindow = () => {
    const window = BrowserWindow.getFocusedWindow();
    if (window) window.close();
}

export const minimizeWindows = () => {
    const window = BrowserWindow.getFocusedWindow();
    if (window) window.minimize();
}

export const maximizeWindows = () => {
    const window = BrowserWindow.getFocusedWindow();
    if (window) {
      if (window.isMaximized()) {
        window.unmaximize();
      } else {
        window.maximize();
      }
    }
}