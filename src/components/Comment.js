import React from 'react'

const Comments = ({ ...props }) => (
    <div className="comment">
        {
            props.postComments.map((comment, i) => {
               return (
                <Comment comment={comment} i={i} key={i} />
               ) 
            })
        }
    </div>
)


const Comment = ({ comment, i }) => (
    <div className="comments">
        <p>
            <strong>{comment.user}</strong>
            {comment.text}
            <button className="remove-comment">&times;</button>
        </p>
    </div>
)

export default Comments; 