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
					<li key={data.id} className="list-group-item">
						<div className="video-list media">
							<div className="media-left">
								<img className="media-object" src={data.image_url} />
							</div>
							<div className="media-body">
								<h5 className="media-heading">{data.name}</h5>
								<p className="media-align"><img className="media-object media-align" src={data.rating_img_url} />{data.review_count} reviews</p>
							</div>
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
					<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
						<fieldset className="form-group">
							<label>Term:</label>
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