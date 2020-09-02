import React,{ Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component{
    constructor(props) {
      super(props)
      //当组件的state发生改变的时候，render函数就会重新执行
      this.handelClick = this.handelClick.bind(this)
    }

    render(){
      const {content , test} = this.props
      return(
        <div onClick= {this.handelClick}>
          {test} - { content }
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

{/*用于类型校验*/}
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

{/*在这里定义属性的默认值*/}
TodoItem.defaultProps = {
  test: 'react hello'
}

export default TodoItem;