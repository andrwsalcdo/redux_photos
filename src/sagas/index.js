import { put, takeEvery, call, fork, all, take, select, takeLatest } from "redux-saga/effects";
import { delay } from "redux-saga";
import * as api from "../api";
import * as actions from "../actions/actions";

export function* watchGetAllPosts() {
    yield takeEvery(actions.REQUEST_POSTS, getAllPosts); 
}

export function* getAllPosts() {
	const posts = yield call(api.fetchPosts);
	yield put(actions.receivePosts(posts));
}

function* watchAndLog() {
	while (true) {
		const action = yield take("*");
		const state = yield select();
		console.group(action.type);
		// console.log("%c prev state", "color: gray", state);
		console.log("%c action", "color: blue", action);
		console.log("%c next state", "color: green", state);
		console.groupEnd(action.type);
	}
}


export default function* root() {
	yield all([fork(watchGetAllPosts), fork(watchAndLog)]);
}