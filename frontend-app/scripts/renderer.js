const { ipcRenderer } = require('electron');

function close_app(){
  ipcRenderer.send('close-app');
}

function dark_mode(){
  var element = document.body;
  element.dataset.bsTheme = element.dataset.bsTheme == "light" ? "dark" : "light";
}