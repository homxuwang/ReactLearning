import React,{Component} from 'react'
import { connect } from 'react-redux'

//无状态组件
const TodoList = (props) => {
  const {inputValue,changeInputValue,handleClick,list,handleDelete} = props
    return (
      <div>
          <div>
              <input 
                value={inputValue}
                onChange={changeInputValue}
              />
              <button onClick={handleClick}>提交</button>
              <ul>
                {
                  list.map((item,index) => {
                    return <li onClick={() => handleDelete(index)} key={index}>{item}</li>
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

const mapStateToProps = (state) => {
  return{
    inputValue: state.inputValue,
    list: state.list
  }
}

//store.dispatch映射到props上
const mapDispatchToProps = (dispatch) => {
  return {    
    changeInputValue(e) {
      const action = {
        type: 'changeInputValue',
        value:e.target.value
      }
      dispatch(action)
    },
    handleClick() {
      const action = {
        type:'addItem'
      }
      dispatch(action)
    },
    handleDelete(index) {
      const action ={
        type: 'deleteItem',
        index
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (TodoList)