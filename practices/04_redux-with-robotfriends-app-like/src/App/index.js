import React, {useState, useEffect} from 'react';
import List	from '../containers/List';
import SearchBar	from '../components/SearchBar';
import './App.scss';

import { baseEndpoint, params, adjustDataSchema } from '../utils/API';
import ScrollableView from '../components/ScrollableView';

// ADJUSTED_USERS_REQUESTED: formatted list of all users - keeps as history (see `adjustSchema` )
let ADJUSTED_USERS_REQUESTED = [];
const PROFILE_COUNT = 15;

function App(){
    const [personsList, setPersonsList] = useState([]);
  

  const onSearchChangeEffect = (e) => {
    const value = e.target.value.toLowerCase();
    setPersonsList(
      [...ADJUSTED_USERS_REQUESTED]
        .filter( p => {
         return p.fullName.toLowerCase().includes( value )
        })
      )
  }
  
  useEffect(() => {
    const endpoint = `${baseEndpoint}/?${params.getResultAmount(PROFILE_COUNT)}`
    fetch(endpoint)
      .then( res => res.json())
      .then( adjustDataSchema )
      .then( data => {
        ADJUSTED_USERS_REQUESTED = data.results;
        setPersonsList( data.results );
      })
      .catch(console.error)
  },[])
   

    
      return (
        <div className="App">
          <SearchBar onSearchChangeEffect = {onSearchChangeEffect}/>
          <ScrollableView>
            {!!personsList.length
              ? <List list = {personsList}/>
              : <h1>Loading...</h1>
            }
          </ScrollableView>
        </div>
      )


}

export default App;
