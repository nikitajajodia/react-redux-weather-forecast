import { Map, fromJS } from 'immutable';

import actionTypes from '../actions/actionTypes';

const initialState = Map({
	weather: [],
	fetchWeatherError: ''
});

export default function appReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FETCH_WEATHER_SUCCESS: {
			console.log("ation", action.data);
			return state.set('weather', action.data)
				.set('fetchWeatherError', '')
		}
		case actionTypes.FETCH_WEATHER_ERROR: {
			return state.set('fetchWeatherError', action.error)
				.set('weather', null)
		}

		default:
			return state;
	}
}