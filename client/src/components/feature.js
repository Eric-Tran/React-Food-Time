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
		this.state = {
			showMap: false,
			showActivity: true
		};
	}
	hide() {
		this.setState({showMap: false})
	}
	show() {
		this.setState({showMap: true})
	}
	handleFormSubmit({ term, location }) {
		this.props.fetchData( { term, location });
		this.setState({
			showMap: true,
			showActivity: false
		});
	}
	renderActivity() {
		if (this.state.showActivity == true) {
			return (
		<RecentActivity
					activity={this.props.activity} />
			)
		}
	}
	renderData(yelpItem) {
		return (
			<YelpListItem
				key={yelpItem.id}
				data={yelpItem} />
		)
		}
	renderMap() {
		if (this.state.showMap == true) {
			let lon = this.props.data[0].location.coordinate.longitude;
			let lat = this.props.data[0].location.coordinate.latitude;
			let data = this.props.data;
		return (
			<GoogleMap data={data} lon={lon} lat={lat} />
		)
		}
	}
	render() {
		const { handleSubmit, fields: { term, location }} = this.props;
		let yelpData;
		if (this.props.data) {
			yelpData = this.props.data.map(this.renderData);
			let lon = this.props.data[0].location.coordinate.longitude;
			let lat = this.props.data[0].location.coordinate.latitude;
		}
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
					<Link to="/decide" className='btn btn-primary gray'>Can't Decide?</Link>
					<img className='yelp_logo' src="../../style/img/yelp.png" alt="Powered by Yelp" />
				</div>
				{this.renderActivity()}
				<ul className="list-group list-container">
				{yelpData}
				</ul>
				<div className='map_container'>
				{this.renderMap()}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { 
		data: state.yelp.data,
		activity: state.activity.data
	 };
}

export default reduxForm({
	form: 'search',
	fields: ['term', 'location']
}, mapStateToProps, actions)(Feature);