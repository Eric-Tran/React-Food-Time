import React, { Component } from 'react';
import { yelpData } from '../actions/index';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { Modal } from 'react-bootstrap';

class YelpList extends Component {
	constructor(props) {
		super(props);
		this.state = {showModal: false};

		// this.close = this.close.bind(this);
		// this.open = this.open.bind(this);
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
		return (
		<li className="list-group-item list-spacing">
			<div className="media">
				<p className="address">{this.props.data.location.display_address[0]}</p>
				<div className="media-left">
					<a href={this.props.data.url}><img className="media-object media-margin" src={this.props.data.image_url} /></a>
				</div>
				<div className="media-body">
					<a href={this.props.data.url}><h4 className="media-heading">{this.props.data.name}</h4></a>
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
          			<Modal.Header closeButton>
            			<Modal.Title>Add Wait Time</Modal.Title>
          			</Modal.Header>
          			<Modal.Body>
			         	<form className="form-inline">
				         	<fieldset className="form-group">
				         		<label>Arrived Approximately:</label>
				         		<select className="form-control">
				         			<option value="1 AM">1 AM</option>
				         			<option value="2 AM">2 AM</option>
				         			<option value="3 AM">3 AM</option>
				         			<option value="4 AM">4 AM</option>
				         			<option value="5 AM">5 AM</option>
				         			<option value="6 AM">6 AM</option>
				         			<option value="7 AM">7 AM</option>
				         			<option value="8 AM">8 AM</option>
				         			<option value="9 AM">9 AM</option>
				         			<option value="10 AM">10 AM</option>
				         			<option value="11 AM">11 AM</option>
				         			<option value="12 PM">12 PM</option>
				         			<option value="1 PM">1 PM</option>
				         			<option value="2 PM">2 PM</option>
				         			<option value="3 PM">3 PM</option>
				         			<option value="4 PM">4 PM</option>
				         			<option value="5 PM">5 PM</option>
				         			<option value="6 PM">6 PM</option>
				         			<option value="7 PM">7 PM</option>
				         			<option value="8 PM">8 PM</option>
				         			<option value="9 PM">9 PM</option>
				         			<option value="10 PM">10 PM</option>
				         			<option value="11 PM">11 PM</option>
				         			<option value="12 AM">12 AM</option>
				         		</select>
				         	</fieldset>
			         		<hr />
			         		<fieldset className="form-group">
				         		<label>Wait is less than:</label>
				         		<select className="form-control">
				         			<option value="10 minutes">10 minutes</option>
				         			<option value="20 minutes">20 minutes</option>
				         			<option value="30 minutes">30 minutes</option>
				         			<option value="45 minutes">45 minutes</option>
				         			<option value="1 hour">1 hour</option>
				         			<option value="1 hour 30 minutes">1 hour 30 minutes</option>
				         			<option value="2 hours">2 hours</option>
				         			<option value="2 hours+">2 hours+</option>
				         		</select> 
			         		</fieldset>
			         	</form>
          			</Modal.Body>
          			<Modal.Footer>
            			<button onClick={this.close.bind(this)}>Close</button>
         			</Modal.Footer>
        			</Modal>
					<span> Wait Time:</span>
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
	form: 'wait',
	fields: ['wait_time']
}, mapDispatchToProps)(YelpList);
