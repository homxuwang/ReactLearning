import React,{ Component } from 'react'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import List from './components/List'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'

class Home extends Component {
  render() {
    return(
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src='//upload-images.jianshu.io/upload_images/7190121-750d12d141de3e5c.JPEG?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp' />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home