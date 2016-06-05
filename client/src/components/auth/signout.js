import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
	componentWillMount() {
		this.props.signoutUser();
	}

	render() {
		return (
		<div className="jumbotron wood">
			<img className="clock_logo" src="../style/img/clock.png" /> 
			<h1 className='display-3 center'>Stay hungry. Come back soon!</h1>
		</div>
		)
	}
}

export default connect(null, actions)(Signout);