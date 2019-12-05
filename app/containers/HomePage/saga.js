//TODO REQUEST API DATA MOVIES DB wits SAGA
 

/**
 * Gets the repositories of the user from The Lovie Database API
 */

import {
  call, put, select, takeLatest
} from 'redux-saga/effects';

import {REQUEST_API_DATA, receiveApiData}  from './actions';

import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * The Lovie Database API repos request/response handler
 */
export function* getApiData() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  //const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  const requestURL = `https://ghibliapi.herokuapp.com/films`;
 console.log(requestURL)
  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
    console.log(repos)
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* videosData() {
  // Watches for LOAD_REPOS actions and calls getMovies when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
