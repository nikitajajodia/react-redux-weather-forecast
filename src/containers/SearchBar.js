import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	AppActions
} from '../actions';


class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onInputChange(event) {
		this.setState({
			term: event.target.value
		});
	}
	onFormSubmit(event) {
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({
			term: ''
		})
	}
	render() {
		return(
			<div>
				<p className='is-error'>{this.props.error}</p>
				<form
					onSubmit={this.onFormSubmit}
					className='input-group'>
					<input
						placeholder='Get a five-day forecast for any city'
						className='form-control'
						value={this.state.term}
						onChange={this.onInputChange}
					/>
					<span className='input-group-btn'>
						<button type='submit' className='btn btn-secondary'>Search</button>
					</span>
				</form>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		error: state.get('appObj').get('fetchWeatherError')
	}
}

export default connect(mapStateToProps, { ...AppActions})(SearchBar);