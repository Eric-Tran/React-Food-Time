import React from 'react';
import { Link } from 'react-router';

export default () => 
							<div id='welcome_header' className="jumbotron">                         
								<h1>Yelp Wait</h1>
									<p>Ever get to your favorite restaurant only to wait hours to eat?
									Yelp Wait allows you to check wait times so you can arrive with minimal waiting. Yelp Wait also allows you to search for a place to eat within walking distance from your location.</p>
									<Link className="signin btn btn-primary" to="/signin">Sign In</Link>
									<Link className="btn btn-primary" to="/signup">Sign Up</Link>
							</div>