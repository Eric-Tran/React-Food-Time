import React from 'react';
import { Link } from 'react-router';

export default () => 
							<div id='welcome_header' className="jumbotron wood">                        
								<h1 className='display-3'>Food Time</h1>
								<img className="clock_logo" src="../style/img/clock.png" /> 
								<p className="lead">When It Comes To Food, You Want It NOW!</p>
								 <hr className="m-y-2" />
								<p className='lead'>Ever get to your favorite restaurant only to wait hours to eat?
								Food Time allows you to check wait times so you can arrive with minimal waiting. 
								Hungry but can't decide what to eat? Food Time will show you a variety of options and find a spot near you.</p>
								<Link className="btn btn-primary gray" to="/signin">Sign In</Link>
								<Link className="btn btn-primary gray" to="/signup">Sign Up</Link>
							</div>