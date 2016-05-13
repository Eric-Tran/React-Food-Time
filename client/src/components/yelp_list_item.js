import React, { Component } from 'react';
import { connect } from 'react-redux';

const YelpList = ({data}) => {
	return (
		<li className="list-group-item list-spacing">
			<div className="media">
				<p className="address">{data.location.display_address[0]}</p>
				<div className="media-left">
					<a href={data.url}><img className="media-object media-margin" src={data.image_url} /></a>
				</div>
				<div className="media-body">
					<a href={data.url}><h4 className="media-heading">{data.name}</h4></a>
					<img className="media-object" src={data.rating_img_url} />
					<p>{data.review_count} reviews</p>
					<button className="btn btn-primary btn-sm">Add Wait Time</button>
					<span> Wait Time:</span>
				</div>
				<p>{data.snippet_text}</p>
			</div>
		</li>
	)
};

export default YelpList;