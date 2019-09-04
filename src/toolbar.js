const remote = require('electron').remote;

document.getElementById('min-btn').addEventListener('click', () => {
    remote.getCurrentWindow().minimize();
});

document.getElementById('min-max-btn').addEventListener('click', () => {
    const currentWindow = remote.getCurrentWindow()
    if(currentWindow.isMaximized()){
        currentWindow.unmaximize();
    } else {
        currentWindow.maximize();
    }
});

document.getElementById('close-btn').addEventListener('click', () => {
    remote.app.quit();
});