const { ipcRenderer } = require('electron');

document.getElementById('btn-close-app').addEventListener('click',()=>{
	ipcRenderer.send('close-app');
})

function dark_mode(){
  var element = document.body;
  element.dataset.bsTheme = element.dataset.bsTheme == "light" ? "dark" : "light";
}