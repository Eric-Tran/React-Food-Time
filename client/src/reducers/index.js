import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import yelpReducer from './yelp_reducer';

//Es6 { form: form } as { form }
const rootReducer = combineReducers({
	form,
	auth: authReducer,
	yelp: yelpReducer
});

export default rootReducer;
