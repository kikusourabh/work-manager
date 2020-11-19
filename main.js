const { app, BrowserWindow } = require("electron");
require("./api/app");
function createWindow() {
  const win = new BrowserWindow({
    width: 1080,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
    resizable: false,
    closable: true,
  });

  //   win.loadFile('index.html')
  win.loadURL("http://localhost:3000");
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
