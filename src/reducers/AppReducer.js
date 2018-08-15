import { Map, fromJS } from 'immutable';

import actionTypes from '../actions/actionTypes';

const initialState = Map({
	weather: null
});

export default function appReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FETCH_WEATHER_SUCCESS: {
			return state.set('weather', action.data)
		}

		default:
			return state;
	}
}