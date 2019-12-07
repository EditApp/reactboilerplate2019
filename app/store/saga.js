//TODO REQUEST API DATA MOVIES DB wits SAGA

/**
 * Gets the repositories of the user from The Lovie Database API
 */

import { call, put, select, takeLatest } from "redux-saga/effects";

import { REQUEST_MOVIES, receiveMoviesData } from "./actions/getMoviesActions";

import { fetchMoviesData } from "./api";

/**
 * The Lovie Database API repos request/response handler
 */
export function* getApiData(action) {
  try {
    const data = yield call(fetchMoviesData);
    yield put(receiveMoviesData(data));
  } catch (e) {
    console.log(e);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* videosData() {
  yield takeLatest(REQUEST_MOVIES, getApiData);
}
