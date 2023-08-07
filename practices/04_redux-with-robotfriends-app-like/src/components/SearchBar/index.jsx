import './styles.scss';

function SearchBar({ onSearchChangeEffect }){
	return (
		<div className = "SearchBar">
			<input 
				placeholder = "Search a name"
				onInput = { onSearchChangeEffect }
				/>
		</div>
	)
}






export default SearchBar;