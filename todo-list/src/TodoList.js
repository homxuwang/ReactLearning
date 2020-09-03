import React,{Component,Fragment} from 'react'
import TodoItem from './TodoItem'
import './style.css'
import Axios from 'axios';


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
        //console.log('render')
        return(
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input 
                        id="insertArea"
                        className='input'
                        value = { this.state.inputValue } 
                        onChange = { this.handleInputChage }
                        ref={(input) => {this.input = input}}
                    />
                    <button 
                      onClick= {this.handleBtnClick}
                    >
                      提交
                    </button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}>
                    { this.getTodoItem() }
                </ul> 
            </Fragment>
        )
    }

    componentDidMount() {
      Axios.get('/api/todolist').then(() => {
        alert('success')
      }).catch(() => {alert('error')})
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
        //ref属性中,this.input = input,即this.input就是input标签元素（不推荐使用）
          inputValue: this.input.value 
        }))
    }

    handleBtnClick() { //添加功能
      //preState是指上一次的state
      //setState是一个异步函数，并不会立即执,但是它的第二个参数可以接受一个回调函数，
      //一些逻辑可以写在回调函数中
      this.setState((preState)=> ({
        list: [...preState.list, preState.inputValue],
        inputValue: ''
      }),() => {
        console.log(this.ul.querySelectorAll('div').length)
      })      
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