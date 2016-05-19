import React, { Component } from 'react';
import * as actions from '../actions';
import { reduxForm } from 'redux-form';
import YelpListItem from './yelp_list_item';
import GoogleMap from './food_map';

class Feature extends Component {
	// componentWillMount() {
	// 	this.props.fetchMessage();
	// }
	constructor(props) {
		super(props);
		this.state = {showMap: false};
	}
	hide() {
		this.setState({showMap: false})
	}
	show() {
		this.setState({showMap: true})
	}
	handleFormSubmit({ term, location }) {
		this.props.fetchData( { term, location });
		this.setState({showMap: true});
	}
	renderData() {
		if (typeof this.props.data == 'undefined') {
			return;
		} else {
			return this.props.data.map((data) => {
				return (
					<YelpListItem
						key={data.id}
						data={data} />
				)
			});
		}
	}
	renderMap() {
		if (this.state.showMap == true) {
			const lon = -115.1647865;
			const lat = 36.1319138;
		return (
			<GoogleMap lon={lon} lat={lat} />
		)
		}
	}
	render() {
		const { handleSubmit, fields: { term, location }} = this.props;
		return (
			<div>
				<div>
					<form className="form-inline" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
						<fieldset className="form-group">
							<label>Find:</label>
							<input className="form-control" {...term} />
						</fieldset>
						<fieldset className="form-group">
							<label>Location:</label>
							<input className="form-control" {...location} />
						</fieldset>
						<button action="submit" className="btn btn-primary">Search</button>
					</form>
				</div>
				<div className="map_container">
					{this.renderMap()}
				</div>
				<ul className="list-group">
				{this.renderData()}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log(state.yelp.data);
	return { data: state.yelp.data };
}

export default reduxForm({
	form: 'search',
	fields: ['term', 'location']
}, mapStateToProps, actions)(Feature);