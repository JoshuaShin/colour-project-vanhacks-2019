import React, { Component } from 'react';
import Grid from './components/Grid'
import './App.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

function App() {
  return (
    <div className="App">
        <Grid />
    </div>
  );
}

export default App;
