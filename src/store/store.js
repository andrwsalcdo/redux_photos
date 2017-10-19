import { createStore } from 'redux'
//import the root reducer 
import rootReducer from '../reducers/index'


//import fake data
import comments from '../data/comments'
import posts from '../data/posts'

//default data
const defaultState = {
    posts, 
    comments
}


const store = createStore(rootReducer, defaultState)
export default store 