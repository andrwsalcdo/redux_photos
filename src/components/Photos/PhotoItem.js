import React from "react"
import { Link } from "react-router-dom"
import { withRouter } from 'react-router'

const PhotoItem = ({ post, comments, increment }) => (
	<figure className="grid_figure">
		<div className="grid_photo_wrap">
			<Link to={`/view/${post.code}`}>
				<img src={post.display_src} alt={post.caption} className="grid_photo" />
			</Link>
		</div>
		<figcaption>
			<p>{post.caption}</p>
			<div className="control_buttons">
				<button onClick={increment}>&hearts; {post.likes}</button>
				<button>
					<Link className="button" to={`/view/${post.code}`}>
						<span className="speech_bubble" />
						{comments ? comments.length : 0}
					</Link>
				</button>
			</div>
		</figcaption>
	</figure>
);

export default withRouter(PhotoItem)
