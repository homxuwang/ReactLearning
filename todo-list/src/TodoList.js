import React,{Component,Fragment} from 'react'
import TodoItem from './TodoItem'
import Test from './Test'
import './style.css'


class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChage = this.handleInputChage.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }

    render() {
      console.log('render')
        return(
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input 
                        id="insertArea"
                        className='input'
                        value = { this.state.inputValue } 
                        onChange = { this.handleInputChage }
                    />
                    <button 
                      onClick= {this.handleBtnClick}
                    >
                      提交
                    </button>
                </div>
                <ul>
                    { this.getTodoItem() }
                </ul>                
                <Test content={this.state.inputValue}/>
            </Fragment>
        )
    }

    getTodoItem() {
      return  this.state.list.map((item,index) => {
        return (
            <TodoItem 
              key={index}
              content={item} 
              index={index}
              deleteItem={this.handleItemDelete}
            />
        )
      })
    }

    handleInputChage(e) { //输入框变化事件
      e.persist()
      this.setState(() => ({
          inputValue: e.target.value
        }))
    }

    handleBtnClick() { //添加功能
      //preState是指上一次的state
      this.setState((preState)=> ({
        list: [...preState.list, preState.inputValue],
        inputValue: ''
      }))
       
    }

    handleItemDelete(index) { //删除功能 
      this.setState((preState) => {          
        const list = [...preState.list]
        list.splice(index,1)
        return {list: list}
      })
    }
}

export default TodoList