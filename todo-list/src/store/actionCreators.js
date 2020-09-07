import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION} from './actionTypes';
import axios from 'axios'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

export const getTodoList = () => {
  //当action的返回为一个函数时，这个函数可以接受到store.dispatch方法
  return (dispatch) => {
    axios.get('http://localhost.charlesproxy.com:3000/todolist').then((res) => {
      const data = res.data;
      const action = initListAction(data)
      dispatch(action)
    })
  }
}