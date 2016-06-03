import React, { Component } from 'react';
import * as actions from '../actions';
import { reduxForm } from 'redux-form';
import YelpListItem from './yelp_list_item';
import GoogleMap from './food_map';
import { Link } from 'react-router'
import { connect } from 'react-redux';

class FoodItems extends Component {
	constructor(props) {
		super(props);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.state = {
			showMap: false,
			showItems: true,
			location: ''
		}
	}
	hide() {
		this.setState({showMap: false})
	}
	show() {
		this.setState({showMap: true})
	}
	
	handleFormSubmit(event) {
		event.preventDefault();
		event.persist();
		let term = event.target[2].value;
		let location = this.state.location
		this.props.fetchData({ term, location });
		this.setState({showItems: false});
		this.setState({showMap: true});
	}

	handleInputChange(event) {
		this.setState({location: event.target.value})
	}

	renderBackBtn() {
		if (this.state.showItems == false) {
			return (
				<div>
					<a href='/decide' className="btn btn-primary btm-spacing">Back</a>
				</div>
			)
		}
	}
	renderMap(data) {
		if (this.state.showMap == true) {
			const lon = data[0].location.coordinate.longitude;
			const lat = data[0].location.coordinate.latitude;
		return (
			<GoogleMap data={data} lon={lon} lat={lat} />
		)
		}
	}

	renderItems(){
		if (this.state.showItems == true) {
			return (
				<div className="jumbotron wood">
						<fieldset className="form-group form-width">
							<label>Enter Your Location:</label>
							<input className="form-control" value={this.state.location} onChange={this.handleInputChange.bind(this)} />
						</fieldset>
						<img className='yelp_logo' src="../../style/img/yelp.png" alt="Powered by Yelp" />
						<hr />
					<label className='item_label'>Choose One:</label>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="coffee" />
							<img className="thumb_img" src='../style/img/thumb/coffee.png' />
							</button>
							<p className="center">Coffee</p>
						</fieldset>
					</form>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="tea" />
							<img className="thumb_img" src='../style/img/thumb/tea.png' />
							</button>
							<p className="center">Tea</p>
						</fieldset>
					</form>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="dessert" />
							<img className="thumb_img" src='../style/img/thumb/dessert.png' />
							</button>
							<p className="center">Dessert</p>
						</fieldset>
					</form>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="ice cream" />
							<img className="thumb_img" src='../style/img/thumb/icecream.png' />
							</button>
							<p className="center">Ice Cream</p>
						</fieldset>
					</form>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="fruit" />
							<img className="thumb_img" src='../style/img/thumb/fruit.png' />
							</button>
							<p className="center">Fruit</p>
						</fieldset>
					</form>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="breakfast" />
							<img className="thumb_img" src='../style/img/thumb/breakfast.png' />
							</button>
							<p className="center">Breakfast</p>
						</fieldset>
					</form>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="omelette" />
							<img className="thumb_img" src='../style/img/thumb/omelette.png' />
							</button>
							<p className="center">Omelette</p>
						</fieldset>
					</form>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="salad" />
							<img className="thumb_img" src='../style/img/thumb/salad.png' />
							</button>
							<p className="center">Salad</p>
						</fieldset>
					</form>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="sandwich" />
							<img className="thumb_img" src='../style/img/thumb/sandwich.png' />
							</button>
							<p className="center">Sandwich</p>
						</fieldset>
					</form>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="burger" />
							<img className="thumb_img" src='../style/img/thumb/burger.png' />
							</button>
							<p className="center">Burger</p>
						</fieldset>
					</form>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="seafood" />
							<img className="thumb_img" src='../style/img/thumb/seafood.png' />
							</button>
							<p className="center">Seafood</p>
						</fieldset>
					</form>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="sushi" />
							<img className="thumb_img" src='../style/img/thumb/sushi.png' />
							</button>
							<p className="center">Sushi</p>
						</fieldset>
					</form>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="dumpling" />
							<img className="thumb_img" src='../style/img/thumb/dumpling.png' />
							</button>
							<p className="center">Dumpling</p>
						</fieldset>
					</form>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="pho" />
							<img className="thumb_img" src='../style/img/thumb/pho.png' />
							</button>
							<p className="center">Pho</p>
						</fieldset>
					</form>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="ramen" />
							<img className="thumb_img" src='../style/img/thumb/ramen.png' />
							</button>
							<p className="center">Ramen</p>
						</fieldset>
					</form>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="chicken" />
							<img className="thumb_img" src='../style/img/thumb/chicken.png' />
							</button>
							<p className="center">Chicken</p>
						</fieldset>
					</form>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="pizza" />
							<img className="thumb_img" src='../style/img/thumb/pizza.png' />
							</button>
							<p className="center">Pizza</p>
						</fieldset>
					</form>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="pasta" />
							<img className="thumb_img" src='../style/img/thumb/pasta.png' />
							</button>
							<p className="center">Pasta</p>
						</fieldset>
					</form>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="lasagna" />
							<img className="thumb_img" src='../style/img/thumb/lasagna.png' />
							</button>
							<p className="center">Lasagna</p>
						</fieldset>
					</form>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="burrito" />
							<img className="thumb_img" src='../style/img/thumb/burrito.png' />
							</button>
							<p className="center">Burrito</p>
						</fieldset>
					</form>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="bbq" />
							<img className="thumb_img" src='../style/img/thumb/bbq.png' />
							</button>
							<p className="center">BBQ</p>
						</fieldset>
					</form>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="korean bbq" />
							<img className="thumb_img" src='../style/img/thumb/kbbq.png' />
							</button>
							<p className="center">Korean BBQ</p>
						</fieldset>
					</form>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="steak" />
							<img className="thumb_img" src='../style/img/thumb/steak.png' />
							</button>
							<p className="center">Steak</p>
						</fieldset>
					</form>
					<form className="info" onSubmit={this.handleFormSubmit}>
						<fieldset className="form-group">
							<button className='no_border' type="submit">
							<input type="hidden" value="pork belly" />
							<img className="thumb_img" src='../style/img/thumb/pork_belly.png' />
							</button>
							<p className="center">Pork Belly</p>
						</fieldset>
					</form>
				</div>
			)
		} else {
			const list = this.props.data.map((data) => {
			return (
				<YelpListItem
					key={data.id}
					data={data} />
			)
		})
		return (
			<div className="list-container">
			{list}
			</div>
		)
		}
	}
			
	render() {
		return (
			<div>
				{this.renderBackBtn()}
				{this.renderItems()}
				<div className="map_container">
				{this.renderMap(this.props.data)}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log(state.yelp.data);
	return { 
		data: state.yelp.data,
		activity: state.activity.data
	 };
}

export default connect(mapStateToProps, actions)(FoodItems);