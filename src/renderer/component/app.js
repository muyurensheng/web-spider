import React, {Component} from 'react';
import Button from "@material-ui/core/Button/Button";
const ipc = require('electron').ipcRenderer;

class App extends Component {
    render() {
        const reply = ipc.sendSync('synchronous-message', 'ping');
        return (
            <Button variant="contained" color="primary">
                你好，{reply}
            </Button>
        )
    }
}
export default App;