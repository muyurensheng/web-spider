import React from 'react';
import ReactDOM from 'react-dom';
import App from "./component/App";
const ipc = require('electron').ipcRenderer;
    ipc.on("message", (event, text) => {
        console.log(arguments);
    });
    ipc.on("isUpdateNow", ()=> {
        alert("开始更新");
    ipc.send("isUpdateNow");
    });
    ipc.send("checkForUpdate");
//添加字体和icon
(function() {

    let fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500';
    fontLink.rel = 'stylesheet';
    let iconLink = document.createElement('link');
    iconLink.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500';
    iconLink.rel = 'stylesheet';
    let s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(fontLink, s);
    s.parentNode.insertBefore(iconLink, s);
})();
ReactDOM.render(<App />, document.querySelector('#app'));