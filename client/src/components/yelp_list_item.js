import React, { Component } from 'react';
import { yelpData } from '../actions/index';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { Modal } from 'react-bootstrap';
import * as actions from '../actions';

class YelpList extends Component {
	constructor(props) {
		super(props);
		this.state = {showModal: false};
	}
	handleFormSubmit({ day, arrival, wait }) {
		var id = this.props.data.id;
		this.props.postWait( { id, day, arrival, wait })
		this.setState({showModal: false})

	}

	close() {
		console.log('closed');
    this.setState({showModal: false});
	}
  	open() {
  		console.log('opened');
    this.setState({showModal: true});
 	}

	render() {
		const { handleSubmit, fields: { day, wait, arrival }} = this.props;
		return (
		<li className="list-group-item list-spacing">
			<div className="media">
				<p className="address">{this.props.data.location.display_address[0]}</p>
				<div className="media-left">
					<a href={this.props.data.url}><img className="media-object media-margin" src={this.props.data.image_url} /></a>
				</div>
				<div className="media-body">
					<a href={this.props.data.url}><h4 className="media-heading">{this.props.data.key}. {this.props.data.name}</h4></a>
					<img className="media-object" src={this.props.data.rating_img_url} />
					<p>{this.props.data.review_count} reviews</p>
					<button 
						className="btn btn-primary btn-sm"
						bsStyle="primary"
						bsSize="large"
						onClick = {this.open.bind(this)}>
						Add Wait Time
					</button>
					<Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          			<form className="form-inline" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
	          			<Modal.Header closeButton>
	            			<Modal.Title>Add Wait Time</Modal.Title>
	          			</Modal.Header>
	          			<Modal.Body>
				         	<fieldset className="form-group">
				         		<label>Arrived Approximately:</label>
				         		<select className="form-control" {...arrival} >
				         			<option value="1">1 AM</option>
				         			<option value="2">2 AM</option>
				         			<option value="3">3 AM</option>
				         			<option value="4">4 AM</option>
				         			<option value="5">5 AM</option>
				         			<option value="6">6 AM</option>
				         			<option value="7">7 AM</option>
				         			<option value="8">8 AM</option>
				         			<option value="9">9 AM</option>
				         			<option value="10">10 AM</option>
				         			<option value="11">11 AM</option>
				         			<option value="12">12 PM</option>
				         			<option value="13">1 PM</option>
				         			<option value="14">2 PM</option>
				         			<option value="15">3 PM</option>
				         			<option value="16">4 PM</option>
				         			<option value="17">5 PM</option>
				         			<option value="18">6 PM</option>
				         			<option value="19">7 PM</option>
				         			<option value="20">8 PM</option>
				         			<option value="21">9 PM</option>
				         			<option value="22">10 PM</option>
				         			<option value="13">11 PM</option>
				         			<option value="24">12 AM</option>
				         		</select>
				         	</fieldset>
				         	<fieldset className="form-group">
				         		<label className="spacing">On:</label>
				         		<select className="form-control" {...day} >
				         			<option value="Monday">Monday</option>
				         			<option value="Tuesday">Tuesday</option>
				         			<option value="Wednesday">Wednesday</option>
				         			<option value="Thursday">Thursday</option>
				         			<option value="Friday">Friday</option>
				         			<option value="Saturday">Saturday</option>
				         			<option value="Sunday">Sunday</option>
				         		</select>
				         	</fieldset>
			         		<hr />
			         		<fieldset className="form-group">
				         		<label>Wait was less than:</label>
				         		<select className="form-control" {...wait} >
				         			<option value="10 minutes">10 minutes</option>
				         			<option value="20 minutes">20 minutes</option>
				         			<option value="30 minutes">30 minutes</option>
				         			<option value="45 minutes">45 minutes</option>
				         			<option value="1 hour">1 hour</option>
				         			<option value="1 hour 15 minutes">1 hour 15 minutes</option>
				         			<option value="1 hour 30 minutes">1 hour 30 minutes</option>
				         			<option value="2 hours">2 hours</option>
				         			<option value="2 hours+">2 hours+</option>
				         		</select> 
			         		</fieldset>
	          			</Modal.Body>
	          			<Modal.Footer>
	          				<button action="submit" className="btn btn-primary btn-spacing">Submit</button>
	            			<button className="btn btn-default" onClick={this.close.bind(this)}>Close</button>
	         			</Modal.Footer>
         			</form>
        			</Modal>
					<span> Wait: {this.props.data.est_wait}</span>
				</div>
				<p>{this.props.data.snippet_text}</p>
			</div>
		</li>

		)	
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ yelpData: yelpData }, dispatch);
}


export default reduxForm({
	form: 'waitForm',
	fields: ['day', 'arrival', 'wait']
}, mapDispatchToProps, actions)(YelpList);
