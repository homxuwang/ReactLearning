
import React,{Component } from 'react'
import TodoLIstUI from './TodoListUI'
import store from './store/index'
import {getInitList,getInputChangeAction,getAddItemAction,getDeleteItemAction} from './store/actionCreators'


import React,{Component} from 'react'
import {connect} from 'react-redux'

class TodoList extends Component {
    render(){
        return(
            <div>
                <div>
                    <input 
                        value={this.props.inputValue}
                        onChange={this.props.changeInputValue}
                    />
                    <button onClick={this.props.handleBtnClick}>提交</button>
                    <ul>
                        {
                            this.props.list.map((item,index) => {
                            return <li onClick={this.props.handleDeleteItem.bind(this,index)} key={index}>{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }


// class TodoList extends Component {  
//   render() {
//     const {inputValue,changeInputValue,handleClick,list,handleDelete} = this.props
//       return (
//         <div>
//             <div>
//                 <input 
//                  value={inputValue}
//                  onChange={changeInputValue}
//                 />
//                 <button onClick={handleClick}>提交</button>
//                 <ul>
//                   {
//                     list.map((item,index) => {
//                       return <li onClick={handleDelete} key={index}>{item}</li>
//                     })
//                   }
//                 </ul>
//             </div>
//         </div>
//       )
//   }

// }


}

const mapStateToProps = (state) => {
    return {
      inputValue: state.inputValue,
      list: state.list
    }
}
//store的dispatch方法挂载到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'changeInputValue',
                value: e.target.value
            }
            dispatch(action)
        },
        handleBtnClick() {
            const action = {
                type: 'addItem'
            }
            dispatch(action)
        },
        handleDeleteItem(index) {
            console.log(index)
            const action = {
                type: 'deleteItem',
                index
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (TodoList)