import React, { Component } from 'react';
import Grid from './components/Grid'
import './App.css';


class App extends Component {
    state = {
        card: [{
            id: 1,
            message: "hello world"
        },
            {
                id: 2,
                message: "hello"
            },
            {
                id: 3,
                message: "hi"
            },
            {
                id: 4,
                message: "hello"
            }]
    };
    render() {
        return (
            <div className="App">
                <Grid grid={this.state.card}/>
            </div>
        );
    }
}

export default App;
