import { FETCH_YELP_DATA } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_YELP_DATA:
			return { ...state, data: action.payload.data.businesses };
	}
	return state
}