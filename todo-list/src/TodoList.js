import React,{Component } from 'react'
import TodoLIstUI from './TodoListUI'
import store from './store/index'
import {getInputChangeAction,getAddItemAction,getDeleteItemAction} from './store/actionCreators'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return (
      <TodoLIstUI 
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleStoreChange={this.handleStoreChange}
        handleButtonClick={this.handleButtonClick}
        handleItemDelete = {this.handleItemDelete}
      />
    )
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action);
  }

  handleStoreChange(){
    this.setState(store.getState())
  }

  handleButtonClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList