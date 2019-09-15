import React, { Component } from 'react';
import Grid from './components/Grid'
import BtnToTop from './components/BtnToTop'
import NavBar from './components/NavBar'

import './App.css';
import './css/style.css'
import * as firebase from 'firebase';

class App extends Component {
    constructor() {
        super();
        this.state = {
            card: [],
            dataAvail:false
        };
    }

    componentDidMount() {
        const cardRoot = firebase.database().ref('cards');

        cardRoot.once('value', (snapshot) => {
            let cards = snapshot.val();
            let newState = [];
            for (let card in cards) {
                newState.push({
                    id: card,
                    message: cards[card].message
                });
            }
            this.setState({
                card: newState,
                dataAvail:true
            });
        });
    }

    render() {

        return (
            <div className="App">
                <NavBar></NavBar>
                {this.state.dataAvail && <Grid grid={this.state.card} />}
                <BtnToTop> </BtnToTop>
            </div>
        );
    }
}

export default App;
