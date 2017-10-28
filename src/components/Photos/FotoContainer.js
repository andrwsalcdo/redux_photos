import React, { Component } from "react"
import { connect } from "react-redux"
import FotoItem from "./FotoItem"

class FotoContainer extends Component {
	increment = () => {
		this.props.increment(this.props.index);
	}

	render() {
		const { routing, comments, post } = this.props;
		return <FotoItem
					increment={this.increment}
					routing={routing}
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

const mapDispatchToFotoProps = dispatch => {
	return {};
};


export default connect(mapStateToFotoProps, mapDispatchToFotoProps)(FotoContainer);