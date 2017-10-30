import React, { Component } from "react"
import { withRouter } from 'react-router'
import { connect } from "react-redux"
import PhotoItem from "./PhotoItem"

class PhotoContainer extends Component {
	increment = () => {
		this.props.increment(this.props.post.id);
	}

	render() {
		const { comments, post } = this.props;
		
		return <PhotoItem
					increment={this.increment}
					comments={comments}
					post={post}
				/>;
	}
}

const mapStateToFotoProps = (state, ownProps) => {
	const commentsOnPost = state.comments[ownProps.post.code];
	return {
		comments: commentsOnPost
	};
};

export default withRouter(connect(mapStateToFotoProps)(PhotoContainer));