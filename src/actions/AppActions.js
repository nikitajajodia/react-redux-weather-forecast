import actionTypes from './actionTypes';

export function fetchWeather(city) {
  return {
    type: actionTypes.FETCH_WEATHER,
    city
  };
}