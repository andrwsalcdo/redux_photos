import React from 'react';
import { Link } from 'react-router-dom'


const Photo = ({ ...props, post, i }) => (
    <figure className="grid_figure">
        <div className="grid_photo_wrap">
            <Link to={`/view/${post.code}`}>
                <img src={post.display_src} alt={post.caption}
                    className="grid_photo" />
            </Link>
        </div>
        <figcaption>
            <p>{post.caption}</p>
            <div className="control_buttons">
                <button onClick={props.increment.bind(null, i)} 
                    className="likes">&hearts; {post.likes}</button>
                <Link className="button" to={`/view/${post.code}`}>
                    <span className="comment_count">
                        <span className="speech_bubble"></span>
                        {props.comments[post.code] 
                            ? props.comments[post.code].length 
                            : 0 }
                    </span>
                </Link>
            </div>
        </figcaption>
    </figure>
)

export default Photo