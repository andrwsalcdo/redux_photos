import { updateItemInArray } from "./utils";

const increment_likes_on_post = (state, action) => {
	const newPosts = updateItemInArray(state, action.id, post => ({
		// object spread syntax
		...post,
		likes: post.likes + 1
	}));

	return newPosts;
};

const posts = (state = [], action) => {
	switch (action.type) {
		case "INCREMENT_LIKES":
			return increment_likes_on_post(state, action);
		case "RECEIVE_POSTS":
			return action.posts;
		default:
			return state;
	}
};

export default posts;