import React from 'react';

function ScrollableView({ children }) {
	return (
		<div style={{ overflow: 'auto' }}>
			{ children }
		</div>
	)
}

export default ScrollableView;