import React,{Component,Fragment} from 'react'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }



    render() {
        return(
            <Fragment>
                <div>
                    <input 
                        value = { this.state.inputValue } 
                        onChange = { this.handleInputChage.bind(this) }
                    />
                    <button onClick= {this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                <li 
                                    key={index}  
                                    onClick={this.handleItemDelete.bind(this,index)}
                                >
                                    {item}                             
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInputChage = (e) => { //输入框变化事件
        this.setState({
            inputValue: e.target.value
        })
    }

    handleBtnClick() { //添加功能
        this.setState({
            inputValue: '',
            list: [...this.state.list, this.state.inputValue]
        })
    }

    handleItemDelete(index) { //删除功能
        const list = [...this.state.list]
        list.splice(index,1)

        this.setState({
            list: list
        })
        
    }
}

export default TodoList