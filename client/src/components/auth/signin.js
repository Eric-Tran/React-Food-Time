import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
	handleFormSubmit({ email, password }) {
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

export default reduxForm({
	form: 'signin',
	fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
