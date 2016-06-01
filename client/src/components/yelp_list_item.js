import React, { Component } from 'react';
import { yelpData } from '../actions/index';
import { reduxForm } from 'redux-form';
import { Modal } from 'react-bootstrap';
import * as actions from '../actions';

class YelpList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			showAllModal: false
		};
	}
	handleFormSubmit({ day="Monday", arrival="1 AM", wait="10 minutes" }) {
		var id = this.props.data.id;
		var name = this.props.data.name;
		this.props.postWait( { id, day, arrival, wait, name })
		this.setState({showModal: false})
	}

	close() {
    this.setState({showModal: false});
	}
  	open() {
    this.setState({showModal: true});
 	}
 	closeAll() {
    this.setState({showAllModal: false});
	}
  	openAll() {
    this.setState({showAllModal: true});
 	}

 	renderTableRows() {
 		return this.props.data.wait_data.map((wait) => {
 			return (
 				<tr key={Math.random()}>
		 			<td>{wait.day}</td>
		 			<td>{wait.arrival}</td>
		 			<td>{wait.wait}</td>
 				</tr>
 			)
 		})
 	}
	render() {
		console.log("this is the wait",this.props.data.wait_data)
		const { handleSubmit, fields: { day, wait, arrival }} = this.props;
		return (
		<li className="list-group-item">
			<div className="media">
			<div className="address">
				<p>{this.props.data.location.display_address[0]}</p>
				<p>{this.props.data.location.display_address[2]}</p>
				<p>{this.props.data.display_phone}</p>
				</div>
				<div className="media-left">
					<a href={this.props.data.url} target="blank"><img className="media-object media-margin" src={this.props.data.image_url} /></a>
				</div>
				<div className="media-body">
					<a href={this.props.data.url} target="blank"><h5 className="media-heading">{this.props.data.name}</h5></a>
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
	            			<button type="button" className="btn btn-default" onClick={this.close.bind(this)}>Close</button>
	         			</Modal.Footer>
         			</form>
        			</Modal>
        			<button 
						className="btn btn-default btn-sm"
						bsStyle="primary"
						bsSize="large"
						onClick = {this.openAll.bind(this)}>
						See All
					</button>
					<Modal show={this.state.showAllModal} onHide={this.closeAll.bind(this)}>
						<Modal.Header closeButton>
	            		<Modal.Title>Added Wait Times</Modal.Title>
	          		</Modal.Header>
	          		<Modal.Body>
	          			<table className="table table-striped table-bordered table-condensed">
 								<thead>
 									<tr>
 											<th>Day</th>
 											<th>Arrival Time</th>
 											<th>Wait Time:</th>
 									</tr>
				 				</thead>
				 				<tbody>
				 					{this.renderTableRows()}
				 				</tbody>
				 					
				 			</table>
	          		</Modal.Body>
						<Modal.Footer>
							<button type="button" className="btn btn-default" onClick={this.closeAll.bind(this)}>Close</button>
						</Modal.Footer>
					</Modal>
					<p className="wait"> est. wait is {this.props.data.est_wait}</p>
				</div>
				<p>{this.props.data.snippet_text}<a href={this.props.data.url} target="blank">see more</a></p>
			</div>
		</li>

		)	
	}
}



export default reduxForm({
	form: 'waitForm',
	fields: ['day', 'arrival', 'wait']
}, null, actions)(YelpList);
