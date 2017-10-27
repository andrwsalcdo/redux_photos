import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './actions/actions'
import App from './App'

function mapStateToProps(state) {
    return {
      posts: state.posts,
      comments: state.comments
     }
}
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

const MainApp = connect(mapStateToProps, mapDispatchToProps)(App)


const Root = ({ store }) => (
    <Provider store={store} >
        <BrowserRouter >
            <Route path="/" component={MainApp} />
        </BrowserRouter>
    </Provider>
)

export default Root 