import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, fetchPosts } from "../actions/actions";
import PhotoContainer from "../components/Photos/PhotoContainer";
import { withRouter } from "react-router";

class PhotoListGrid extends Component {
	componentDidMount() {
		this.fetchData();
	}

	fetchData = () => {
		const { fetchPosts } = this.props; 
		fetchPosts(); 
	};

	increment = id => {
		const { increment } = this.props; 
		increment(id);
	};

	renderPhotoContainer = (post, index) => {
		return <PhotoContainer key={post.id} post={{ ...post }} increment={this.increment} />;
	};

	render() {
		return <div className="photo_grid">{this.props.posts.map(this.renderPhotoContainer)}</div>;
	}
}

const mapStateToPhotoGridProps = (state) => {
	return {
		posts: state.posts, 
	};
};

export default withRouter(connect(mapStateToPhotoGridProps, { increment: increment, fetchPosts: fetchPosts })(PhotoListGrid));