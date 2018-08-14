import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Route,
  browserHistory,
  Switch
} from 'react-router-dom';

import {
  App 
} from './components';

import {
  Provider
} from 'react-redux';

import configureStore from './store';
const store = configureStore();

class WeatherApp extends React.Component {
  render() {
    return (
    	<Provider store={store}>
    		<BrowserRouter history={browserHistory}>
            <Switch>
            	<Route exact path="/" component={App} />
            </Switch>
            </BrowserRouter>
    	</Provider>
    );
  }
}

ReactDOM.render(<WeatherApp />, document.getElementById('app'));
