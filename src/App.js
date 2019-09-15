import React, { Component } from 'react';
import Grid from './components/Grid'
import './App.css';
import * as firebase from 'firebase';

// Update firebase with user's information from authentication and user's score
// function readDatabase() {
//     const cardRoot = firebase.database().ref().child('cards/');
//     var count = 0;
//     cardRoot.once('value').then((snapshot) => {
//         let list = snapshot.val();
//         for (let i in list) {
//             count += 1;
//         }
//         addCards(count);
//     })
//
// }
//
// function numOfCards() {
//     const cardRoot = firebase.database().ref().child('cards/');
//     var count = 0;
//     cardRoot.once('value').then((snapshot) => {
//         let list = snapshot.val();
//         for (list in list) {
//             count += 1;
//         }
//         addCards(count);
//     });
//     return count;
// }
//
//
// function addCards(numOfCards){
//     let cardId = numOfCards + 1;
//     const cardRoot = firebase.database().ref().child('cards/' + cardId);
//
//     var cardObj = {};
//     cardObj.color = getColor();
//     cardObj.message = getMessage();
//
//     cardRoot.set(cardObj);
//
// }
//
// function getColor(){
//     return "123456";
// }
//
function getMessage(){
    return "hi";
}


class App extends Component {
    constructor() {
        super();
        this.state = {
            cardId: getMessage(),
            numOfCards:[],
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
    }

    componentDidMount() {
        const cardRoot = firebase.database().ref().child('cards/');
        var count = 0;
        // const cardRef = rootRef.child('cardId');
        cardRoot.once('value').then((snapshot) => {
            let list = snapshot.val();
            for (list in list) {
                count += 1;
            }
            console.log(count);

            this.setState({
                numOfCards: count
            });

        });


    }

    // state = {
    //     card: [{
    //         id: 1,
    //         message: "hello world"
    //     },
    //         {
    //             id: 2,
    //             message: "hello"
    //         },
    //         {
    //             id: 3,
    //             message: "hi"
    //         },
    //         {
    //             id: 4,
    //             message: "hello"
    //         }]
    // };
    render() {
        return (
            <div className="App">
                <h3> {this.state.cardId} </h3>
                <h4> {this.state.numOfCards}</h4>
                <Grid grid={this.state.card} numOfCards={this.state.card} />
            </div>
        );
    }
}

export default App;
