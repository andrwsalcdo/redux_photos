import { updateItemInArray } from "./utils";
const increment_likes_on_post = (state, action) => {
	const newPosts = updateItemInArray(state, action.id, post => {
		return post; // post is already updated by the api call via Saga
	});
	return newPosts;
};

const posts = (state = [], action) => {
	switch (action.type) {
		case "INCREMENT_LIKES_ASYNC":
			return increment_likes_on_post(state, action.response); 
		case "RECEIVE_POSTS":
			return action.posts;
		default:
			return state;
	}
};

export default posts;