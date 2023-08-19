import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import List	from '../containers/List';
import SearchBar from '../components/SearchBar';
import ScrollableView from '../components/ScrollableView';

import { baseEndpoint, params } from '../utils/API';
import { mapStateToProps, mapDispatchToProps } from '../redux/utils';


import './App.scss';

// ADJUSTED_USERS_REQUESTED: formatted list of all users - keeps as history (see `adjustSchema` )
// let ADJUSTED_USERS_REQUESTED = [];
const PROFILE_COUNT = 15;



function App(props){
	const personas = props.personasReducer.list
	const [personsList, setPersonsList] = useState([]);

	const onSearchChangeEffect = (e) => {
		const { payload : { text }} = props.onSearchChangeEffect(
			e.target.value.toLowerCase()
		)
		
		const value = text?.toLowerCase();

		setPersonsList(
			[...props.personasReducer.list]
				.filter( p => {
				return p.fullName.toLowerCase().includes( value )
			})
		)
	}
	
	useEffect(() => {
	  const endpoint = `${baseEndpoint}/?${params.getResultAmount(PROFILE_COUNT)}`
	  /** Replaced by props from redux 
		//   fetch(endpoint)
		// 	.then( res => res.json())
		// 	.then( adjustDataSchema )
		// 	.then( data => {
		// 		ADJUSTED_USERS_REQUESTED = data.results;
		// 		setPersonsList( data.results );
		// 	})
		// 	.catch(console.error)
		*/

		/* Request consumption : from redux thunk*/
		props.requestPersonas(endpoint)
	},[])

	useEffect(() => {
		setPersonsList(props.personasReducer.list)
	},[personas.length])


	return (
	<div className="App">
		<SearchBar onSearchChangeEffect = {onSearchChangeEffect}/>
		<ScrollableView>
		{!!personas?.length
			? <List list = {personsList}/>
			: <h1 className='App-loading'>Loading...</h1>
		}
		
		</ScrollableView>
	</div>
	)


}

export default connect(mapStateToProps, mapDispatchToProps)(App);
