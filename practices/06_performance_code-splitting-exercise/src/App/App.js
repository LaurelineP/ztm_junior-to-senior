
import { useState, useEffect, lazy, Suspense } from 'react';
import { Loader } from '../components/Loader/Loader';
import './App.css';

const loadAsDefault = module => ({ default: Object.values(module)?.[0] || module.default });
const NavigationBar = lazy(() => import('../components/NavigationTabs/NavigationTabs').then(loadAsDefault));
const Page = lazy(() => import('../components/Page/Page').then(loadAsDefault));

function App() {
	const [ pageId, setPageId ] = useState('tab1');
	const [ tabList, setTabList ] = useState([]);
	
	const dynamicPageContent  = `${'Dynamic'} ${tabList?.find(x => x.id === pageId)?.title}`;

	const onTabSelection = (e) => {
		setPageId(e.target.id);
	}

	// Splitting: Dynamic import code to be loaded after 1sec
	useEffect(() => {
		const _tabs = [
			{ title: 'Tab 1', id: 'tab1'},
			{ title: 'Tab 2', id: 'tab2'},
			{ title: 'Tab 3', id: 'tab3'}
		]
		// content to render on code splitting
		setTimeout(() => {
			Promise.all([
				_tabs
			]).then( data => {
				setTabList(data[0]);
			}).catch(console.error);
		}, 5_000)
	}, [])

	return (
		<div className="App">
			<header className="App-header">
				<p>Code Splitting and Performance!</p>
			</header>

			{/* Enables the Code Splitting experience */}
			<Suspense>
				{!!tabList?.length ? (
					<div className="fade-in">
						<NavigationBar
							list={tabList}
							onTabSelection={onTabSelection}
						/>
						<div className="App-content">
							<Page>
								<h1>{dynamicPageContent}</h1>
							</Page>
						</div>
					</div>
				): <Loader/> }
			</Suspense>
		</div>
	);
}

export default App;
