import React from 'react'

const Comment = ({ comment, i, removeComment, postId }) => (	
	<div className="comment">
		<p>
			<strong>{comment.user}</strong>
			{comment.text}
			<button className="remove_comment" onClick={removeComment.bind(null, postId, i)}>
				&times;
			</button>
		</p>
	</div>
);

export default Comment