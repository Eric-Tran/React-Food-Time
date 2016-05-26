import React from 'react';
import { Link } from 'react-router';

export default () => 
							<div id='welcome_header' className="jumbotron wood">                         
								<h1 className='display-3'>Food Time</h1>
								<p className="lead">When It Comes To Food, You Want It NOW!</p>
								 <hr className="m-y-2" />
								<p className='lead'>Ever get to your favorite restaurant only to wait hours to eat?
								Food Time allows you to check wait times so you can arrive with minimal waiting. 
								Hungry and want to eat immediately? Food Time also allows you to search for a place 
								to eat within walking distance from your location.</p>
								<Link className="signin btn btn-primary gray" to="/signin">Sign In</Link>
								<Link className="btn btn-primary gray" to="/signup">Sign Up</Link>
							</div>