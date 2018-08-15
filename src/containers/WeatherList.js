import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
	renderWeather() {

	}
	render() {
		return (
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					
				</tbody>
			</table>
		);
	}
}

function mapStateToProps(state) {
	return {
		weather: state.get('appObj').get('weather')
	}
}

export default connect(mapStateToProps)(WeatherList);