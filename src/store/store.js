import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import createSagaMiddleware from 'redux-saga'; 
import root  from '../sagas'

const addLoggingToDispatch = store => {
	const rawDispatch = store.dispatch;
	if (!console.group) {
		return rawDispatch;
	}

	return action => {
		console.group(action.type);
		console.log("%c prev state", "color: gray", store.getState());
		console.log("%c action", "color: blue", action);
		const returnValue = rawDispatch(action);
		console.log("%c next state", "color: green", store.getState());
		console.groupEnd(action.type);
		return returnValue;
	};
};

const addPromiseSupportToDispatch = store => {
	const rawDispatch = store.dispatch;
	return action => {
		if (typeof action.then === "function") {
			return action.then(rawDispatch);
		}
		return rawDispatch(action);
	};
};

const sagaMiddleware = createSagaMiddleware(); 


const configureStore = () => {

	const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));


	if (process.env.NODE_ENV !== 'production') {
		store.dispatch = addLoggingToDispatch(store); 
	}

	store.dispatch = addPromiseSupportToDispatch(store); 

	sagaMiddleware.run(root); 

	return store;
};

export default configureStore;