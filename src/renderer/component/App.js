import React, {Component} from 'react';
import Dashboard from "./Dashboard/Dashboard";
const ipc = require('electron').ipcRenderer;

class App extends Component {
    render() {
        const reply = ipc.sendSync('synchronous-message', 'ping');
        return (
            <Dashboard />
        )
    }
}
export default App;