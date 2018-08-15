import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Chart } from '../components';

class WeatherList extends Component {
	renderWeather(cityData) {
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		return(
			<tr key={cityData.city.id}>
				<td>{cityData.city.name}</td>
				<td><Chart color='red' data={temps} units='K' /></td>
				<td><Chart color='green' data={pressures} units='hPa' /></td>
				<td><Chart color='black' data={humidities} units='%' /></td>
			</tr>
		)
	}
	render() {
		return (
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{
						this.props.weather.map(this.renderWeather)
					}
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