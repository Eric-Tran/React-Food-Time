import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
	renderHeader() {
		if (this.props.authenticated) {
			return (
				<Link to="/search" className="navbar-brand">Food Time</Link>
			)
		} else {
			return (
				<Link to="/" className="navbar-brand">Food Time</Link>
			)
		}
	}
	renderAuthenticated() {
		if (this.props.authenticated) {
			return (
				<div className="header-flex">
				<li className="nav-item pull-right">
					<Link className="nav-link" to="/search">Search</Link>
				</li>
				<li className="nav-item pull-right">
					<Link className="nav-link" to="/decide">Decide</Link>
				</li>
				<li className="nav-item pull-right">
					<Link className="nav-link" to="/signout">Sign Out</Link>
				</li>
				</div>
			);
		} else {
			return [
				<li className="nav-item pull-right" key={1}>
						<Link className="nav-link" to="/signin">Sign In</Link>
				</li>,
				<li className="nav-item pull-right" key={2}>
					<Link className="nav-link" to="/signup">Sign Up</Link>
				</li>
			];
		}
	}
	render() {
		return (
			<nav className="navbar navbar-dark navbar-fixed-top">
				<div className="container bg-inverse">
					<div className="navbar-header">
						{this.renderHeader()}
						<ul className="nav navbar-nav">
						{this.renderAuthenticated()}
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header);