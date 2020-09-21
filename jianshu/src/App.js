import React,{Component} from 'react';
import {Provider} from 'react-redux'
import {Globalstyle} from './style.js'
import {Globalstyle1} from './statics/iconfont/iconfont'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div>
            <Globalstyle></Globalstyle>
            <Globalstyle1></Globalstyle1>            
            <BrowserRouter>
              <div>
                <Header />
                <Route path='/' exact component={Home}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/detail/:id' exact component={Detail}></Route>
              </div>
            </BrowserRouter>
          </div>
          
      </Provider>
      
    )
  }
}

export default App;
