import React, { Component } from 'react';
import Grid from './components/Grid'
import './App.css';
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

        cardRoot.on('value', (snapshot) => {
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
                {console.log(this.state2)}

                {console.log(this.state)}

                {this.state.dataAvail && <Grid grid={this.state.card} />}
            </div>
        );
    }
}

export default App;
