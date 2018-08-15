import { Map, fromJS } from 'immutable';

import actionTypes from '../actions/actionTypes';

const initialState = Map({
	weather: [],
	fetchWeatherError: ''
});

export default function appReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FETCH_WEATHER_SUCCESS: {
			return state.set('weather', state.get('weather').concat(action.data))
				.set('fetchWeatherError', '')
		}
		case actionTypes.FETCH_WEATHER_ERROR: {
			return state.set('fetchWeatherError', action.error)
		}

		default:
			return state;
	}
}