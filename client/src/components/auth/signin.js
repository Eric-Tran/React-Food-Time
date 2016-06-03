import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
	handleFormSubmit({ email, password }) {
		console.log(email, password);
		//Need to do something to log user in
		this.props.signinUser({ email, password });
	}
	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>Oops!</strong> {this.props.errorMessage}
				</div>
			);
		}
	}

	render() {
		const { handleSubmit, fields: { email, password }} = this.props;

		return (
			<form className="form-size jumbotron wood" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
				{this.renderAlert()}
					<label>Email:</label>
					<input {...email} className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label>Password:</label>
					<input {...password} type="password" className="form-control" />
				</fieldset>
				<button action="submit" className="btn btn-primary gray">Sign in</button>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return { errorMessage: state.auth.error };
}

//First set of parens is to pass configurations, second is the component.
//null is first argument, not using yet, mapStateToProps
//third argument pass in actions to get access to all the actions as props
export default reduxForm({
	form: 'signin',
	fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
