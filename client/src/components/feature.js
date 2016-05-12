import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { reduxForm } from 'redux-form';

class Feature extends Component {
	// componentWillMount() {
	// 	this.props.fetchMessage();
	// }
	handleFormSubmit({ term, location }) {
		this.props.fetchData( { term, location });
	}
	renderData() {
		if (typeof this.props.data == 'undefined') {
			return;
		} else {
			return this.props.data.map((data) => {
				return (
					<li key={data.id} className="list-group-item list-spacing">
						<div className="media">
						<p className="address">{data.location.display_address[0]}</p>
							<div className="media-left">
								<a href={data.url}><img className="media-object media-margin" src={data.image_url} /></a>
							</div>
							<div className="media-body">
								<a href={data.url}><h4 className="media-heading">{data.name}</h4></a>
								<img className="media-object" src={data.rating_img_url} />
								<p>{data.review_count} reviews</p>
								<button className="btn btn-primary btn-sm">Add Wait Time</button>
								<span> Wait Time:</span>
							</div>
							<p>{data.snippet_text}</p>
						</div>
					</li>
				);
			});
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