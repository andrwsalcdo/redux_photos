import React from "react";
import { Route, Switch } from "react-router-dom"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actions from "../actions/actions"
import Main from '../components/Header/Main'
import PhotoGrid from '../components/Photos/PhotoGrid' 
import Single from '../components/SinglePhoto/Single'

function mapStateToProps(state) {
	return {
		posts: state.posts,
		comments: state.comments
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}

const _PhotoGrid = connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);
const _Single = connect(mapStateToProps, mapDispatchToProps)(Single);

const MainPage = ({ ...props }) => (
	<div>
		<Main />
		<Switch>
			<Route exact path="/" component={_PhotoGrid} {...props} />
			<Route path="/view/:postId" component={_Single}  {...props} />
		</Switch>
	</div>
);

export default MainPage;
