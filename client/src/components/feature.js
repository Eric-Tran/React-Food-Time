import React, { Component } from 'react';
import * as actions from '../actions';
import { reduxForm } from 'redux-form';
import YelpListItem from './yelp_list_item';
import GoogleMap from './food_map';
import RecentActivity from './recent_activity';
import { Link } from 'react-router'
class Feature extends Component {
	componentWillMount() {
		this.props.fetchRecentActivity();
	}
	
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
			return (
				<RecentActivity
					activity={this.props.activity} />
			)
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
	renderMap(data) {
		if (this.state.showMap == true) {
			const lon = data[0].location.coordinate.longitude;
			const lat = data[0].location.coordinate.latitude;
		return (
			<GoogleMap data={data} lon={lon} lat={lat} />
		)
		}
	}
	render() {
		console.log("These are the props", this.props);
		const { handleSubmit, fields: { term, location }} = this.props;
		return (
			<div>
				<div className="jumbotron wood">
					<form className="form-inline info" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
						<fieldset className="form-group">
							<label>Find:</label>
							<input className="form-control" {...term} placeholder="food, sushi, Max's" />
						</fieldset>
						<fieldset className="form-group">
							<label>Location:</label>
							<input className="form-control" {...location} placeholder="address, city, zip" />
						</fieldset>
						<button action="submit" className="btn btn-primary gray">Search</button>
					</form>

					<img className='yelp_logo' src="../../style/img/yelp.png" alt="Powered by Yelp" />
				</div>
				<ul className="list-group list-container">
				{this.renderData()}
				</ul>
				<div className="map_container">
				{this.renderMap(this.props.data)}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log(state.yelp.data);
	return { 
		data: state.yelp.data,
		activity: state.activity.data
	 };
}

export default reduxForm({
	form: 'search',
	fields: ['term', 'location']
}, mapStateToProps, actions)(Feature);