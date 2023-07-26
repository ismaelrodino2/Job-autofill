const { app, BrowserWindow } = require("electron"); // eslint-disable-line
const { spawn } = require("child_process");

const path = require("path");
const url = require("url");
let win;


function startExpressServer() {
  const serverProcess = spawn('node', [path.join(__dirname, '../backend/server.js')]);

  serverProcess.stdout.on('data', (data) => {
    console.log(`Express server: ${data}`);
  });

  serverProcess.stderr.on('data', (data) => {
    console.error(`Express server error: ${data}`);
  });
}


function createWindow() {
  win = new BrowserWindow({
    width: 1000,
    height: 600,
    show: false
  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  win.once("ready-to-show", () => {
    win.show();
  });

  win.on("closed", () => {
    app.quit();
  });
}

app.on("ready", () => {
  startExpressServer();
  createWindow();
});
