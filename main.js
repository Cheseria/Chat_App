const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  // Load your chat application hosted on localhost
  mainWindow.loadURL('http://localhost:3000'); // Change the port if needed

  // Open the DevTools (optional)
  // mainWindow.webContents.openDevTools();

  // Listen for the window being closed
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

// Create the main Electron window when the app is ready
app.whenReady().then(createWindow);

// Quit the app when all windows are closed (except on macOS)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// Create a new window when the app is activated (e.g., clicking the dock icon on macOS)
app.on('activate', function () {
  if (mainWindow === null) createWindow();
});
