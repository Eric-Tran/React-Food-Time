import React, { Component } from 'react';
import { Well } from 'react-bootstrap';

export default class RecentActivity extends Component {
	renderActivity() {
		if(this.props.activity){
			return this.props.activity.map((data) => {
				if (data.term !== undefined){
					return (
						<li key={data._id}>
							{data.term} 
						</li>
					)
				}
					return (
						<li key={data._id}>
							{data.business_name}
						</li>
					)
			})
		}
	}

	render() {
		console.log("this is the datassssss", this.props.activity);
		return (
			<div>
			<Well>
				<h4>Recent Activity</h4>
				<ul>
				{this.renderActivity()}
				</ul>
			</Well>
			</div>
		)
	}
}

