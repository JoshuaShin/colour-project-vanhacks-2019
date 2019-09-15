import React, { Component } from 'react';
import Grid from './components/Grid'
import BtnToTop from './components/BtnToTop'
import NavBar from './components/NavBar'
import './App.css';
import './css/style.css'

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
                <NavBar> </NavBar>
                <Grid grid={this.state.card}/>
                <BtnToTop> </BtnToTop>
            </div>
        );
    }
}

export default App;
