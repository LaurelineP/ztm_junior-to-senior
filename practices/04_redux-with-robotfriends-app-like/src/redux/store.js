import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { logger } from 'redux-logger'

import  rootReducer  from './reducers/reducers';

const middlewares = [ thunkMiddleware, /*logger*/ ];

// high order function: enables redux devtools or by default use compose
const composeEnhancers = window?.__REDUX_DEVTOOLS_EXTENSION__ || compose


export const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(...middlewares),
		composeEnhancers(),
	  )
  )