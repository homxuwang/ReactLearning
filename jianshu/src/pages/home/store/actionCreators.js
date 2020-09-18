import axios from 'axios'
import * as constants from './constants'
import {fromJS} from 'immutable'

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

const addHomeList = (list,nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
})

export const getHomeInfo = () =>  {
    return (dispatch) => {
      axios.get('/api/home.json').then((res) => {
        const result = res.data.data
        const action = changeHomeData(result)
        dispatch(action)
      }).catch((res)=>{
        console.log(res)
      })
    }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data
      console.log(page)
      dispatch(addHomeList(result.articleList,page + 1))
    }).catch((res)=>{
      console.log(res)
    })
  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show 
})