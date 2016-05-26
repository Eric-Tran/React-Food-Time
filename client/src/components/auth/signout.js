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
			<h1 className='display-3'>Stay hungry. Come back soon!</h1>
		</div>
		)
	}
}

export default connect(null, actions)(Signout);