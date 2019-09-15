import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCyMLAjq-lqu-hmHLNPx7vWOSWhClBhF7I",
    authDomain: "colourproject-a9e85.firebaseapp.com",
    databaseURL: "https://colourproject-a9e85.firebaseio.com",
    projectId: "colourproject-a9e85",
    storageBucket: "colourproject-a9e85.appspot.com",
    messagingSenderId: "53689176369",
    appId: "1:53689176369:web:df1ca796be2fa381116010"
};

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

