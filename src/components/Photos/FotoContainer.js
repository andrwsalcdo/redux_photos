import React, { Component } from "react"
import { withRouter } from 'react-router'
import { connect } from "react-redux"
import FotoItem from "./FotoItem"

class FotoContainer extends Component {
	increment = () => {
		this.props.increment(this.props.post.id);
	}

	render() {
		const { comments, post } = this.props;
		
		return <FotoItem
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

export default withRouter(connect(mapStateToFotoProps)(FotoContainer));