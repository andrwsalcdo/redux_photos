import React, { Component } from "react"
import CommentContainer from "./CommentContainer"
import { withRouter } from "react-router"

class Comments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			author: "",
			comment: ""
		};
	}

	removeComment = i => {
		const { postId } = this.props.match.params
		// action
		this.props.removeComment(postId, i);
	};

	handleSubmit = e => {
		e.preventDefault();
		const { postId } = this.props.match.params;
		const author = this.state.author;
		const comment = this.state.comment;
		// action
		this.props.addComment(postId, author, comment);
		// clear form
		this.setState({ author: "", comment: "" });
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	renderCommentContainer = (comment, index) => {
		return <CommentContainer comment={comment} i={index} key={index} removeComment={this.removeComment}  />;
	};

	render() {
		return (
			<div className="comments">
				{this.props.comments.map(this.renderCommentContainer)}
				<form className="comment_form" onSubmit={this.handleSubmit}>
					<input type="text" name="author" placeholder="author" value={this.state.author} onChange={this.handleChange} />
					<input type="text" name="comment" placeholder="comment" value={this.state.comment} onChange={this.handleChange} />
					<input type="submit" hidden />
				</form>
			</div>
		);
	}
}

export default withRouter(Comments)