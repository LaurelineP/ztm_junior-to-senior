
import { dispatchRequestPersonas, dispatchSearchField } from './actions/actions'


export const mapStateToProps = state => {
	return { ...state }
}

export const mapDispatchToProps = dispatch => ({
	onSearchChangeEffect: text => dispatch(dispatchSearchField(text)), 
	requestPersonas: endpoint => dispatchRequestPersonas(dispatch, endpoint)
})

export const createActionPayload = (type, payload) => { 
	type,
	payload
}