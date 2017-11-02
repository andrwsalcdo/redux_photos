import * as api from "../api/index";

// Constant Action Types
const INCREMENT_LIKES = "INCREMENT_LIKES";
const ADD_COMMENT = "ADD_COMMENT";
const REMOVE_COMMENT = "REMOVE_COMMENT";
const RECEIVE_POSTS = "RECEIVE_POSTS";

// increment likes
export const increment = id => ({
	type: INCREMENT_LIKES,
	id
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
// receive posts from fake backend
export const receivePosts = posts => ({
	type: RECEIVE_POSTS,
	posts
});
// fetch posts from fake backend
export const fetchPosts = () => api.fetchPosts().then(response => receivePosts(response));