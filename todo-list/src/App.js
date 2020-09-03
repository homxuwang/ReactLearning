import React,{Component, Fragment} from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import './style.css'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      list: []
    }
    this.handleItem = this.handleItem.bind(this)
  }
  render() {
    return(
      <Fragment>
        <TransitionGroup>
         {
           this.state.list.map((item,index) => {
             return(
              <CSSTransition
              key={index}
              timeout={1000}
              classNames="fade"
              unmountOnExit
              onEntered={(el) => {el.style.color = 'blue'}}
              appear={true}
              >
               <div >{item}</div>
              </CSSTransition>
             )
           })
         }
        </TransitionGroup>
         <button onClick={this.handleItem}>toggle</button>
      </Fragment>
    )    
  }

  handleItem() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list,'item']
      }
    })
  }
}

export default App;
