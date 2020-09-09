import React,{Component} from 'react';
import {Globalstyle} from './style.js'
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <div>
          <Globalstyle></Globalstyle>
          <Header />
      </div>
    )
  }
}

export default App;
