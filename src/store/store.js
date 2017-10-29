import { createStore } from "redux"
import rootReducer from "../reducers/index"
import comments from "../data/comments"
import posts from "../data/posts"
import { saveState, loadState } from "../localStorage"
import throttle from 'lodash.throttle'

const defaultState = {
	posts,
	comments
};

const configureStore = () => {
	// load local storage state or default state
	const persistedState = loadState(defaultState);

	const store = createStore(rootReducer, persistedState);

	// save State changes to local Storage
	store.subscribe(throttle(() => {
		saveState(store.getState());
    }, 1000));
    
    return store; 
};

export default configureStore; 