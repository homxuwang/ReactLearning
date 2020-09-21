import React,{ Component } from 'react'
import {ListItem,ListInfo,LoadMore} from '../style'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import {Link} from 'react-router-dom'

class List extends Component {
    render() {
      const {articleList,getMoreList,articlePage} = this.props
        return(
            <div>
                {
                  articleList.map((item,index) => {
                    return(
                      <Link key={index} to={'/detail/' + item.get('id')}>
                        <ListItem>
                          <img 
                            src={item.get('imgUrl')}
                            className='pic'
                            alt=''
                          />
                          <ListInfo>
                            <h3 className='title'>{item.get('title')}</h3>
                            <p className='desc'>{item.get('desc')}</p>
                          </ListInfo>
                        </ListItem>
                      </Link>
                    )
                  })
                }
                <LoadMore onClick={() => getMoreList(articlePage)}>加载更多</LoadMore>
            </div>
        )
    }
}

const mapStateToProps= (state) => ({
    articleList: state.getIn(['home','articleList']),
    articlePage: state.getIn(['home','articlePage'])
});

const mapStateToDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(mapStateToProps,mapStateToDispatch)(List)