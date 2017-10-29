import React, { Component } from "react";
import { connect } from "react-redux";
import { increment } from "../../actions/actions";
import FotoContainer from "./FotoContainer";

class PhotoListGrid extends Component {
	increment = id => {
		this.props.increment(id);
	};

	renderPhotoContainer = (post, index) => {
		return <FotoContainer key={post.id} post={{ ...post }} increment={this.increment} />;
	};

	render() {
		return <div className="photo_grid">{this.props.posts.map(this.renderPhotoContainer)}</div>;
	}
}

const mapStateToPhotoGridProps = state => ({
	posts: state.posts
});

const mapDispatchToPhotoGridProps = dispatch => ({
	increment(id) {
		dispatch(increment(id));
	}
});

export default connect(mapStateToPhotoGridProps, mapDispatchToPhotoGridProps)(PhotoListGrid);
