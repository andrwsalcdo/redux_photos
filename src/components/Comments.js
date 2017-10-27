import React, { Component } from "react"
import CommentList from './CommentList' 


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
			<div className="comments">
                {/* /* list of comments */}
				<CommentList postComments={this.props.postComments} 
					removeComment={this.props.removeComment} 
					postId={this.props.match.params.postId} />
                {/* add comment form */}
				<form className="comment_form" onSubmit={this.handleSubmit}>
					<input type="text" name="author" placeholder="author" value={this.state.author} onChange={this.handleChange} />
					<input type="text" name="comment" placeholder="comment" value={this.state.comment} onChange={this.handleChange} />
					<input type="submit" hidden />
				</form>
			</div>
		);
	}
}


export default Comments;