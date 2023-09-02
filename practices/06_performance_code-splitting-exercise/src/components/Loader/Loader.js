import './Loader.css';
export const Loader = ({ hasMessage }) => {
	return(
		<div className="Loader">
			<div className="Loader-picto"/>
			{ hasMessage && <span>Loading...</span> }
		</div>
	)
}