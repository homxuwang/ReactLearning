import React,{ PureComponent } from 'react'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import List from './components/List'
import { actionCreators } from './store'
import {connect} from 'react-redux'
import {BackToTop} from './style'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'


class Home extends PureComponent {

  handleScrollTop() {
    window.scrollTo(0,0)
  }
  render() {
    return(
      <HomeWrapper>
        <HomeLeft>
          <img 
            className='banner-img' src='//upload-images.jianshu.io/upload_images/7190121-750d12d141de3e5c.JPEG?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp' 
            alt=''
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          this.props.showScroll ? 
            (<BackToTop onClick={this.handleScrollTop}>顶部</BackToTop>)
            : null
        }        
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener('scroll',this.props.changeScrollToTopShow)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll',this.props.changeScrollToTopShow)
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home','showScroll'])
})

const mapStateToDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  },
  changeScrollToTopShow(e) {
    if(document.documentElement.scrollTop > 100){
      dispatch(actionCreators.toggleTopShow(true))
    }else{
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
});

export default connect(mapStateToProps,mapStateToDispatch)(Home)