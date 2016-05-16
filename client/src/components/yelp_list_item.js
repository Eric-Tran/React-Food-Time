import React, { Component } from 'react';
import { yelpData } from '../actions/index';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { Modal, Button } from 'react-bootstrap';

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
			            <h4>Text in a modal</h4>
			            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

			            <h4>Popover in a modal</h4>
			            <p>there is a </p>

			            <h4>Tooltips in a modal</h4>
			            <p>there is a</p>

			            <hr />

			            <h4>Overflowing text to show scroll behavior</h4>
			            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          			</Modal.Body>
          			<Modal.Footer>
            			<Button onClick={this.close.bind(this)}>Close</Button>
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
