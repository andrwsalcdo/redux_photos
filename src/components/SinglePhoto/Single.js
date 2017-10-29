import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "../../actions/actions"
import FotoContainer from "../Photos/FotoContainer"
import Comments from "./Comments"

class Single extends Component {
	render() {
		const { addComment, comments, increment, post, removeComment } = this.props;
		const commentsList = comments || [];
		return (
			<div className="single_photo">
				<FotoContainer post={post} increment={increment}  />
				<Comments comments={commentsList} removeComment={removeComment} addComment={addComment} />
			</div>
		);
	}
}

const onePost = (posts, post_id) => {
	return posts.findIndex(post => post.code === post_id);
};

const mapStateToProps = (state, ownProps) => {
	const { postId } = ownProps.match.params;
	const commentsOnPost = state.comments[postId];
	const i = onePost(state.posts, postId);

	return {
		post: state.posts[i],
		comments: commentsOnPost
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Single)