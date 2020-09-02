import React,{ Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component{
    constructor(props) {
      super(props)
      this.handelClick = this.handelClick.bind(this)
    }

    render(){
      const {content} = this.props
      return(
        <div onClick= {this.handelClick}>
          { content }
        </div>
      ) 
    }
    
    handelClick(){
      {/*子组件要调用父组件的方法时，首先父组件将方法绑定到父组件自身，
      然后以props的形式传进来，最后子组件进行调用*/}
      const {deleteItem,index} = this.props
      deleteItem(index)
    }
}

TodoItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

export default TodoItem;