/* -------------------------------------------------------------------------- */
/*                                   ACTIONS                                  */
/* -------------------------------------------------------------------------- */
/**
 * 
 * FUNCTION EXECUTED BY THE CLIENT with arguments to pass in order to ,
 * for these described functions to follow a dispatching pattern
 * --> those are actions creators in this files
 */

import { CHANGE_SEARCHFIELD } from './actions';

export const dispatchSearchField = text => ({
	type: CHANGE_SEARCHFIELD,
	payload: { text }
})