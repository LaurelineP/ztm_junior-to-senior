import { combineReducers } from 'redux';
import { CHANGE_SEARCH_FIELD, REQUEST_ROBOT_PENDING, REQUEST_ROBOT_SUCCESS, REQUEST_ROBOT_FAILED } from '../actions/constants_actions';
/* -------------------------------------------------------------------------- */
/*                                  REDUCERS                                  */
/* -------------------------------------------------------------------------- */
/**
 * A reducer is composing the store object
 */

const initialState = {
	searchField: ''
}


/** Standard way */
export const searchPersonaReducer = (state = initialState, action ) => {
	const { type, payload } = action;
	switch( type ){
		case CHANGE_SEARCH_FIELD: 
			return {
				...state, 
				searchField: payload?.text
			}
		default:
			return state;

	}
}


const initialState2 = {
	LIST: [],
	list: [],
	isLoading: false,
	hasError: false
}

export const personasReducer = (state = initialState2, action ) => {
	const { type, payload } = action;
	switch( type ){
		case REQUEST_ROBOT_PENDING: 
			return {
				...state, 
				...payload
			}
		case REQUEST_ROBOT_SUCCESS: 
			return {
				...state, 
				...payload
			}
		case REQUEST_ROBOT_FAILED: 
			return {
				...state, 
				...payload
			}
		default:
			return state;

	}
}

const rootReducer = combineReducers({
	searchPersonaReducer,
	personasReducer
})

export default rootReducer;