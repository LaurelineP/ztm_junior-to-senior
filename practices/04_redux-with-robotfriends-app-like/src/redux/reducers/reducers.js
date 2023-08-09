import { createActionPayload } from '../utils';
/* -------------------------------------------------------------------------- */
/*                                  REDUCERS                                  */
/* -------------------------------------------------------------------------- */
/**
 * A reducer is composing the store object
 */

const initialState = {
	searchfield: ''
}
/** Standard way */
// export const search = (state = initialState, { type, payload }) => {
// 	switch( type ){
// 		case 'CHANGE_SEARCHFIELD': 
// 			console.log('payload')
// 			return {
// 				...state, 
// 				search: payload.text
// 			}
// 		default:
// 			return state;

// 	}
// }

/** Personal exploration  */
export const search = (state = initialState, { type, payload } = (()=> createActionPayload)() ) => {
	switch( type ){
		case 'CHANGE_SEARCHFIELD': 
			console.log('payload')
			return {
				...state, 
				search: payload.text
			}
		default:
			return state;
	}
}