import React from 'react'

import 'antd/dist/antd.css';
import { Input,Button,List} from 'antd';

const TodoListUI = (props) => {
  return(
    <div>
        <div style={{marginTop:'10px',marginLeft:'10px'}}>
        <Input 
            value={props.inputValue} 
            placeholder='todo Info' 
            style={{width: '300px',marginRight:'10px'}}
            onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleButtonClick}>提交</Button>
        </div>
        <List
        style={{margin:'20px 10px 10px 10px',width:'360px'}}
        bordered
        dataSource={props.list}
        renderItem={(item,index) => (
        <List.Item onClick={() => {props.handleItemDelete(index)}}>
            {item}
        </List.Item>
        )}
        />
    </div>
  )
}

// class TodoListUI extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//       return (
//           <div>
//               <div style={{marginTop:'10px',marginLeft:'10px'}}>
//               <Input 
//                   value={this.props.inputValue} 
//                   placeholder='todo Info' 
//                   style={{width: '300px',marginRight:'10px'}}
//                   onChange={this.props.handleInputChange}
//               />
//               <Button type="primary" onClick={this.props.handleButtonClick}>提交</Button>
//               </div>
//               <List
//               style={{margin:'20px 10px 10px 10px',width:'360px'}}
//               bordered
//               dataSource={this.props.list}
//               renderItem={(item,index) => (
//               <List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>
//                   {item}
//               </List.Item>
//               )}
//               />
//           </div>
//       )
//     }
// }

export default TodoListUI