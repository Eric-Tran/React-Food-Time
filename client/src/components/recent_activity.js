import React, { Component } from 'react';
import { Well } from 'react-bootstrap';

export default class RecentActivity extends Component {
	renderActivity() {
		if(this.props.activity){
			return this.props.activity.map((data) => {
				if (data.term !== undefined){
					let time = data.created_at
					return (
						<li key={data._id}>
							<span className="wait">{data.term}</span> searched for in <span className="wait">{data.location}</span> {this.time}
						</li>
					)
				}
					return (
						<li key={data._id}>
							<span className="wait">{data.wait_time}</span> wait on <span className="wait">{data.day} at {data.arrival_time}</span> has been added to <span className="wait">{data.business_name}</span> {this.time}
						</li>
					)
			})
		}
	}

	render() {
		console.log("this is the datassssss", this.props.activity);
		return (
			<div>
				<h4>Recent Activity</h4>
				<ul>
				{this.renderActivity()}
				</ul>
			</div>
		)
	}
}

