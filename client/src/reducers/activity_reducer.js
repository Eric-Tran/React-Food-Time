import { FETCH_RECENT_ACTIVITY } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_RECENT_ACTIVITY:
			return { ...state, data: action.payload.data };
	}
	return state
}