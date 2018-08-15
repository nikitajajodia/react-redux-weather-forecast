import {
  take,
  put,
  fork,
  call
} from 'redux-saga/effects';

import { get } from '../api';

import actionTypes from '../actions/actionTypes';

function* fetchWeather() {
  while (true) {
  	const {
      city 
    } = yield take(actionTypes.FETCH_WEATHER);
    yield put({
      type: actionTypes.FETCH_WEATHER_REQUEST
    });
    const response = yield call(get, `&q=${city}`, null, null)
    if(response.status >= 400) {
      yield put({
        type: actionTypes.FETCH_WEATHER_ERROR,
        error: response.data.message
      });
    } else {
      yield put({
        type: actionTypes.FETCH_WEATHER_SUCCESS,
        ...response
      })
    }
  }
}

export default function* () {
  yield fork(fetchWeather);
}