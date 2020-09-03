import React,{Component } from 'react'
import 'antd/dist/antd.css';
import { Input,Button,List, Typography, Divider } from 'antd';
import store from './store/index'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
    console.log(this.state)
  }

  render() {
    return(
      <div>
        <div style={{marginTop:'10px',marginLeft:'10px'}}>
          <Input value={this.state.inputValue} placeholder='todo Info' style={{width: '300px',marginRight:'10px'}}/>
          <Button type="primary">提交</Button>
        </div>
        <List
          style={{margin:'20px 10px 10px 10px',width:'360px'}}
          bordered
          dataSource={this.state.list}
          renderItem={item => (
          <List.Item>
              {item}
          </List.Item>
          )}
        />
      </div>
      
    )
  }
}

export default TodoList