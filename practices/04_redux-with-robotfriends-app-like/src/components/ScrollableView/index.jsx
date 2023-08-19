import React from 'react';
import './ScrollableView.scss'

function ScrollableView({ children }) {
	return (
		<div className = "ScrollableView">
			{ children }
		</div>
	)
}

export default ScrollableView;