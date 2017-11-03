import { put, takeEvery, call, fork, all } from "redux-saga/effects";
import * as api from "../api";
import * as actions from "../actions/actions";

// watcher sagas: prefex watch---
export function* watchGetAllPosts() {
    // yield* avoids an infinite looping of getAllPosts
	yield* takeEvery(actions.requestPosts, getAllPosts);
}

// Worker sagas: prefix get---
export function* getAllPosts() {
	const posts = yield call(api.fetchPosts);
	yield put(actions.receivePosts(posts));
}

// final root saga to import into store
export default function* root() {
	yield all([fork(watchGetAllPosts), fork(getAllPosts)]);
}
