import React from "react"
import Comment from './Comment'

const CommentList = ({ comments, removeComment, postId }) => (
	<div>
    {
        comments.map((comment, i) => {
          return  <Comment comment={comment} i={i} key={i} 
                removeComment={removeComment} postId={postId} />
        })   
    }
	</div>
);

export default CommentList