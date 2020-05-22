// const { app, BrowserWindow } = require('electron')
const { app, BrowserWindow } = require('electron');
//exe c/s b/s 


let win;

app.on('ready', () => {
    win = new BrowserWindow({ //chromium
            webPreferences: {
                nodeIntegration: true
            }
        })
        // win.loadFile("index.html")
    win.loadURL("http://localhost:3000/")
})