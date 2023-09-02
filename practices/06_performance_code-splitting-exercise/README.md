# Learn About Code Splitting & Performance
*( August 2023 )*
This project being part of the course, was made coding along
and may vary from the videos.

Provided links in case of issues:
- https://github.com/aneagoie/code-splitting-exercise
- https://github.com/aneagoie/code-splitting-exercise-updated

## Step 1: coding along
*Note: This would be the base on which we would iterate*
- create a project with CRA ( despite its deprecations )
- compose your app: an app that has in its content inner tabs
	- has 3 tabs
	- if a tab is clicked you shall display the content
	 for this clicked tab



## Step 2: Exercise - Code Splitting exercise - app initial version:
Once the App code is set, observe what a build ( compilation of the 
code for the production ) will do. Follow the following test to create a build
- run `npm run build`
- observe what changes the project had
- change some bit of code or add a component 
- run `npm run build` again
- answer the following: what did happen ? what can we observe 

### Answer/Observations
- a `build/` folder has been generated with a js and html files, a new folder static
- each time we run the command: a new build is generated then injected to the 
script tag

First build
![first build](/assets/performance_code-spliting_first-build.png)

Second build after changing the code
![second build](/assets/performance_code-spliting_secong-build-with-changes.png)


## Step 3: Exercise - Code Splitting exercise - app modified version:
With dynamic imports we can avoid the browser to load all at once
which will improve performances and the time to first byte  ( TTFB )

There are two ways to split the code
- route based splitting: splitting occurring for each page load
- component splitting: splitting based on component 
Ex: when there is a big component that does not need to load all the component  
as they may not be required right away.

### Approach here
The way the app requires the dynamic splitting here is  
based on a condition expecting to have an array of tabs.
This condition emulates the tabs to be loaded asynchronously:
- rendering: if `tabs` exist, the `NavigationTab` and `Page`   
- implementation: through a useEffect triggered after 5 second  
( see `useEffect` )

This implementation allows to distinctly see in the browser's   
inspector network tab 
- loads first the bundle
- then 5 sec later, it loads the 2 others files ( corresponding  
to the dynamically imported components )

### Problematic encounter / Motivation
Following the reusability principle for a component:
- This personal implementation did use the same   
component `Page` and the composition pattern to inherit   
from whatever children and did not want to duplicate the   
3 condition rendering a Page - Hence the approach of fake 
asynchronous load ( alike a fetch )
```jsx
/**
 * ❌ (unfitted for this implementation ==> unnecessary repetition )  
 * course code logic applied: this would resemble to the following
 * - unfit because Page as already been imported --> hence no need
 */
 
	if( selectedTab === 'tab1') return <Page>{ selectedTab }</Page>
	else if ( selectedTab ) return <Page>{ selectedTab }</Page>
	else { <Page>{ selectedTab }</Page> }


// course approach applied
	if( selectedTab === 'tab1') { return <Page1> }
	else if ( selectedTab === 'tab2') { 
		this.setState({ component: import('./Page1') })
	} else if{ <Page>{ selectedTab }</Page> }
```