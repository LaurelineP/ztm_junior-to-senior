/* -------------------------------------------------------------------------- */
/*                                   ACTIONS                                  */
/* -------------------------------------------------------------------------- */
/**
 * 
 * FUNCTION EXECUTED BY THE CLIENT with arguments to pass in order to ,
 * for these described functions to follow a dispatching pattern
 * --> those are actions creators in this files
 */

import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOT_PENDING,
	REQUEST_ROBOT_SUCCESS,
	REQUEST_ROBOT_FAILED
} from '../actions/constants_actions';

import { adjustDataSchema } from '../../utils/API';



export const dispatchSearchField = text => ({
	type: CHANGE_SEARCH_FIELD,
	payload: { text }
})


export const dispatchRequestPersonas = (dispatch, endpoint) => {
	dispatch({ type: REQUEST_ROBOT_PENDING, payload: { isLoading: true }});

	let PERSONAS;
	let payloadDispatcher;
	fetch( endpoint )
		.then( res => res.json())
		.then( adjustDataSchema )
		.then( data => {
			PERSONAS = data.results;
			payloadDispatcher = {
				type: REQUEST_ROBOT_SUCCESS,
				payload: { list: PERSONAS, isLoading: false, hasError: false },
			}
			dispatch({
				type: REQUEST_ROBOT_SUCCESS,
				payload: { list: PERSONAS, isLoading: false, hasError: false },
			})
			return PERSONAS;
		})
		.catch( err => {
			console.error(err);
			payloadDispatcher = {
				type: REQUEST_ROBOT_SUCCESS,
				payload: { list: PERSONAS, isLoading: false, hasError: false },
			}
			
			dispatch({
				type: REQUEST_ROBOT_FAILED,
				payload: { list: PERSONAS, isLoading: false,  hasError: true },
			})
			return payloadDispatcher
		})
}

