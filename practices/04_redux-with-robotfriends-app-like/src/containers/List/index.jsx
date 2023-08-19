
import { useState, useEffect } from 'react';
import PersonaCard from '../Card';
import './styles.scss';

function renderRows(list = [], qty = 5 ){
	let rowsToRender = [];
	if( !!list.length ){
		let _rowCards = [];
		// creating a `div` rows containing 5 cards
		rowsToRender = list.reduce((acc, item, idx) => {
			// adds item to a row
			_rowCards.push( item );

			/* defines row's max items quantity 
			( adds filled row and resets for next iterations ) */
			if( _rowCards.length === qty ){
				acc.push(_rowCards);
				_rowCards = [];
			}
			/** push last row - case having less than the quantity (5)
			 * of items required to creates new rows */
			else if ( idx === list.length - 1 ){
				acc.push(_rowCards)
			}
			return acc;
		}, []);
	}
	return rowsToRender;
}


function List (props) {
	const list = props?.list
	const [ windowWidth, setWindowWidth ] = useState(0);
	

	useEffect(() => {
		const setWindowWidthListener = e => { setWindowWidth( e?.target.innerWidth || window.innerWidth )};
		const removeEventListener = (eventListenerTuple) =>{ window.removeEventListener(...eventListenerTuple)}

		// ~ on page load - store window width
		setWindowWidthListener();

		// ~ responsive: on window resize - the list rendered must acknowledge the new window width
		window.addEventListener('resize', setWindowWidthListener);

		return () => removeEventListener(['resize', setWindowWidthListener]);
	}, [])

	const rowsOfCards = renderRows( list );
	const shouldBeResponsive = windowWidth <= 1000;

	return (
		<div className="List">
				{
					!shouldBeResponsive ? (
						rowsOfCards?.map((cards, idx) => (
							<div id = {`row-${idx}`} key ={`row-${idx}`}>
								{
									cards.map(( cardData, cardIdx ) => (
										<PersonaCard 
											key = {`card-${cardIdx}-${cardData.fullName}`} 
											data = { cardData }
											/>
									))
								}
							</div>
						))
					) : (
						list.map(( cardData, cardIdx  )=> (
							<PersonaCard key = {`card-${cardIdx}-${cardData.fullName}`} data = { cardData }/>
						))
					)
				}
		</div>
	)
	
}

export default  List