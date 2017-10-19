import React, { Component } from 'react'
import Photo from './Photo'
import Comments from './Comment'


class Single extends Component {
    render () {
        const { postId } = this.props.match.params; 
        const i = this.props.posts.findIndex((post) => 
            post.code === postId)
        const post = this.props.posts[i]; 
        // comments or [] when post has 0 comments
        const postComments = this.props.comments[postId] || []; 

        return (
            <div className="single_photo">
                <Photo i={i} post={post} 
                    { ...this.props } />  
                <Comments postComments={postComments} />     
            </div>
        )
    }
}

export default Single