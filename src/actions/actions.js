// Constant Action Types
export const INCREMENT_LIKES = "INCREMENT_LIKES";
export const INCREMENT_LIKES_ASYNC = "INCREMENT_LIKES_ASYNC";
export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REQUEST_POSTS = "REQUEST_POSTS";


// user requests to increment likes
export const increment = id => ({
	type: INCREMENT_LIKES,
	id
});
// response from api
export const incrementLikesAsync = response => ({
	type: INCREMENT_LIKES_ASYNC,
	response
});
// add comment
export const addComment = (postId, author, comment) => ({
	type: ADD_COMMENT,
	postId,
	author,
	comment
});
// remove comment
export const removeComment = (postId, i) => ({
	type: REMOVE_COMMENT,
	postId,
	i
});
export const requestPosts = () => ({
	type: REQUEST_POSTS
});
// receive posts from fake backend
export const receivePosts = posts => ({
	type: RECEIVE_POSTS,
	posts
});