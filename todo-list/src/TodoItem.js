import React,{ Component } from 'react';

class TodoItem extends Component{
    constructor(props) {
      super(props)
      this.handelClick = this.handelClick.bind(this)
    }

    render(){
      return(
        <div onClick= {this.handelClick} key={this.props.index}>
          {this.props.content}
        </div>
      ) 
    }
    
    handelClick(){
      {/*子组件要调用父组件的方法时，首先父组件将方法绑定到父组件自身，
      然后以props的形式传进来，最后子组件进行调用*/}
      this.props.deleteItem(this.props.index)
    }
}

export default TodoItem;