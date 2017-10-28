import { createStore } from "redux"
import rootReducer from "../reducers/index"
//import fake data
import comments from "../data/comments"
import posts from "../data/posts"
import { saveState, loadState } from "../localStorage"


const defaultState = {
	posts,
	comments
};
// load local storage state or default state
const persistedState = loadState(defaultState); 

const store = createStore(rootReducer, persistedState);

// save State changes to local Storage
store.subscribe(() => {
	saveState(store.getState());
});

export default store