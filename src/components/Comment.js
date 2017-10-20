import React, { Component } from "react";

// const Comments = ({ ...props }) => (
class Comments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			author: "",
			comment: ""
		};
	}
	handleSubmit = e => {
		e.preventDefault();
        const { postId } = this.props.match.params;
        const author = this.state.author; 
        const comment = this.state.comment; 
        // action
        this.props.addComment(postId, author, comment); 
        // clear form
        this.setState({ author: '', comment: '' });  
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	render() {
		return (
			<div className="comment">
                {/* /* list of comments */}
				{this.props.postComments.map((comment, i) => {
					return <Comment comment={comment} i={i} key={i} removeComment={this.props.removeComment} 
                            postId={this.props.match.params.postId} />;
				})}
                {/* add comment form */}
				<form className="comment-form" onSubmit={this.handleSubmit}>
					<input type="text" name="author" placeholder="author" value={this.state.author} onChange={this.handleChange} />
					<input type="text" name="comment" placeholder="comment" value={this.state.comment} onChange={this.handleChange} />
					<input type="submit" hidden />
				</form>
			</div>
		);
	}
}

const Comment = ({ comment, i, removeComment, postId }) => (
	<div className="comments">
		<p>
			<strong>{comment.user}</strong>
			{comment.text}
			<button className="remove-comment" onClick={removeComment.bind(null, postId, i)}>&times;</button>
		</p>
	</div>
);

export default Comments;
