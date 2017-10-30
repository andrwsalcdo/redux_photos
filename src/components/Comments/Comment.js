import React from 'react'

const Comment = ({ comment, removeComment }) => (	
	<div className="comment">
		<p>
			<strong>{comment.user}</strong>
			{comment.text}
			<button className="remove_comment" onClick={removeComment}>
				&times;
			</button>
		</p>
	</div>
);

export default Comment