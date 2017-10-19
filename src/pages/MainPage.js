import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from '../components/Main'
import PhotoGrid from '../components/PhotoGrid'
import Single from '../components/Single'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'

function mapStateToProps(state) {
    return {
      posts: state.posts,
      comments: state.comments
     }
}
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

const _PhotoGrid = connect(mapStateToProps, mapDispatchToProps)(PhotoGrid)
const _Single = connect(mapStateToProps, mapDispatchToProps)(Single)
 

const MainPage = ({ ...props }) => (
    <div>
        <Main { ...props } />
        <Switch>
            <Route exact path="/" component={_PhotoGrid} 
                { ...props } />
            <Route path="/view/:postId" component={_Single} 
                { ...props } />         
        </Switch>
    </div>
)

export default MainPage