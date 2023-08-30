
import { useState, useEffect } from 'react';
import { Loader } from '../components/Loader/Loader';
import './App.css';

function App() {
	const [ pageId, setPageId ] = useState('tab1');
	const [ tabList, setTabList ] = useState([]);
	const [ DynamicNavigationTabs, setDynamicNavigationTabsComponent ] = useState(null);
	const [ DynamicPage, setDynamicPageComponent ] = useState(null);
	

	const _tabs = [
		{ title: 'Tab 1', id: 'tab1'},
		{ title: 'Tab 2', id: 'tab2'},
		{ title: 'Tab 3', id: 'tab3'}
	]

	const pageRawContent  = `${'Dynamic'} ${tabList?.find(x => x.id === pageId)?.title}`;

	const onTabSelection = (e) => {
		setPageId(e.target.id);
	}

	// Splitting: Dynamic import code to be loaded after 1sec
	useEffect(() => {
		// content to render on code splitting
		setTimeout(() => {
			Promise.all([
				_tabs,
				import('../components/NavigationTabs/NavigationTabs.js'),
				import('../components/Page/Page.js')
			]).then( data => {
					setTabList(data[0]);
					setDynamicNavigationTabsComponent(data[1]);
					setDynamicPageComponent(data[2]);
			}).catch(console.error);
		}, 5_000)
	}, [])


	return (
		<div className="App">
			<header className="App-header">
				<p>Code Splitting and Performance!</p>
			</header>

			{/* Enables the Code Splitting experience */}
			{!!tabList?.length ? (
				<div className="fade-in">
					<DynamicNavigationTabs.NavigationTabs
						list={tabList}
						onTabSelection={onTabSelection}/>
					<div className="App-content">
						<DynamicPage.Page>
							<h1>{pageRawContent}</h1>
						</DynamicPage.Page>
					</div>
				</div>
			): <Loader hasMessage/> }
		</div>
	);
}

export default App;
