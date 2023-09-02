
import { useState } from 'react';
import { NavigationTabs } from '../components/NavigationTabs/NavigationTabs';
import { Page } from '../components/Page/Page';
import './App.css';

function App() {
	const [ pageId, setPageId ] = useState('tab1');

	const tabs = [
		{ title: 'Tab 1', id: 'tab1'},
		{ title: 'Tab 2', id: 'tab2'},
		{ title: 'Tab 3', id: 'tab3'}
	]

  	const pageRawContent  = tabs?.find(x => x.id === pageId)?.title;

	const onTabSelection = (e) => {
		setPageId(e.target.id);
	}

	return(
		<div className="App">
			<header className="App-header">
				<p>Code Splitting and Performance!</p>
			</header>

			<div className="fade-in">
				<NavigationTabs list={tabs} onTabSelection={onTabSelection}/>
				<div className="App-content">
					<Page>
					<h1>{pageRawContent}</h1>
					</Page>
				</div>
			</div>
		</div>
	);
}

export default App;
