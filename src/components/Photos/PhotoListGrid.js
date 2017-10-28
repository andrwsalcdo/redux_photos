import React, { Component } from "react"
import { connect } from "react-redux"
import { increment } from "../../actions/actions"
import FotoContainer from "./FotoContainer"


class PhotoListGrid extends Component {
    increment = id => {
        this.props.increment(id); 
    }

	renderPhotoContainer = (post, index) => {
        const { location, match, history } = this.props;
		const routing = { location, match, history }; 
    
		return <FotoContainer key={post.id} post={{ ...post }} 
                index={index} increment={this.increment} routing={routing} />;
	};

	render() {
		return <div className="photo_grid">{this.props.posts.map(this.renderPhotoContainer)}</div>;
	}
}

const mapStateToPhotoGridProps = state => {
	return {
		posts: state.posts
	};
};

const mapDispatchToPhotoGridProps = dispatch => ({
	increment: id => {
		dispatch(increment(id));
	}
});

export default connect(mapStateToPhotoGridProps, mapDispatchToPhotoGridProps)(PhotoListGrid)