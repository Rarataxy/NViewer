'use strict'

import { app, protocol, BrowserWindow } from 'electron'
import {
  createProtocol
} from 'vue-cli-plugin-electron-builder/lib'
const isDevelopment = process.env.NODE_ENV !== 'production'

let win

protocol.registerSchemesAsPrivileged([{scheme: 'app', privileges: { secure: true, standard: true } }])

function createWindow () {
  win = new BrowserWindow({ minWidth: 940, minHeight: 550, backgroundColor: '#1d1d2b', show: false, frame: false, webPreferences: { nodeIntegration: true, webSecurity: false }})

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST)
    console.log('dev');
  } else {
    createProtocol('app')
    win.loadURL('app://./index.html')
  }

  win.on('ready-to-show', () => {
    win.setSize(0, 0)
    win.show()
    win.setSize(400, 400)
})

  win.on('closed', () => {
    win = null
  })
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {}
  createWindow()
})

if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }


}

