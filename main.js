const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const Tray = electron.Tray;
const path = require('path');
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;
const trayIconPath = path.join(__dirname,'/assets/images/colors.png')

let win
let tray = null ;
function createWindow () {
  win = new BrowserWindow({
    show:false,
    height:618,width:1124,
    resizable: false,frame:false
  })
  win.webContents.openDevTools
  win.loadURL('file://'+__dirname+'/src/index.html')

  win.once('ready-to-show', () => {
    win.show()
  })

  win.on('closed', () => {
    win = null
  })
}

function createTray(paams) {
  tray = new Tray(trayIconPath)
  tray.setToolTip('Material design colors')
  tray.on('double-click', () => {
    win.show();
  })

  let tray_menu = new Menu();
  tray_menu.append( new MenuItem({
    label:'Open',
        click:() => {
          win.show();
        }
  }));
  tray_menu.append( new MenuItem({role:'quit'}));
  tray.setContextMenu(tray_menu);
}

app.on('ready', () => {
  createWindow()
  createTray()
  
})
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