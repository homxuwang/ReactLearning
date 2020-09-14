import React,{Component} from 'react';
import {Provider} from 'react-redux'
import {Globalstyle} from './style.js'
import {Globalstyle1} from './statics/iconfont/iconfont'
import store from './common/store'
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Globalstyle></Globalstyle>
          <Globalstyle1></Globalstyle1>
          <Header />
      </Provider>
      
    )
  }
}

export default App;
