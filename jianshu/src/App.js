import React,{Component} from 'react';
import {Globalstyle} from './style.js'
import {Globalstyle1} from './statics/iconfont/iconfont'

import Header from './common/header'

class App extends Component {
  render() {
    return (
      <div>
          <Globalstyle></Globalstyle>
          <Globalstyle1></Globalstyle1>
          <Header />
      </div>
    )
  }
}

export default App;
