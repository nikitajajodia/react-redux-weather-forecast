import React, { Component } from 'react';

import { SearchBar, WeatherList } from '../containers';

class App extends Component {
	render() {
		return(
			<div>
				<SearchBar />
				<WeatherList />
			</div>
		)
	}
}

export default App;