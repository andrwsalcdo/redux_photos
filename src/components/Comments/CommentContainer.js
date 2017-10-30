import React, { Component } from 'react'
import Comment from './Comment'

class CommentContainer extends Component {
    removeComment = (i) => {
        this.props.removeComment(this.props.i)
    }
    render () {
        return (
            <div>
                <Comment comment={this.props.comment}  removeComment={this.removeComment} />
            </div>
        )
    }
}

export default CommentContainer