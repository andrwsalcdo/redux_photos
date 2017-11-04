import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import createSagaMiddleware from 'redux-saga'; 
import root  from '../sagas'


const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware(); 
	const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
	
	store.runSaga = sagaMiddleware.run(root); 

	return store;
};

export default configureStore;