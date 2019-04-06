import React, { Component } from 'react';
import './App.css';
import Panzer from  './component/ball';
import Canvaslogic from  './component/canvas-logic';
class App extends Component {

  constructor(){
    super();

  }
  render() {
    return (
        <div className="canvas d-block">
              <Canvaslogic />
        </div>
    );
  }
}

export default App;
