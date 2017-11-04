import posts from "../data/posts";
import comments from "../data/comments";

export const fakeDatabase = {
	posts,
	comments
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchPosts = () =>
	delay(500).then(() => {
		return fakeDatabase.posts;
	});

export const incrementLikesAsync = id =>
	delay(500).then(() => {
		const post = fakeDatabase.posts.find(p => p.id === id);
		post.likes = post.likes + 1;
		return post;
	});
