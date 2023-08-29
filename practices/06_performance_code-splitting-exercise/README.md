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
![first build](assets/performance_code-spliting_first-build.png)

Second build after changing the code
![second build](assets/performance_code-spliting_secong-build-with-changes)


## Step 3: Exercise - Code Splitting exercise - app modified version:
With dynamic imports we can avoid the browser to load all at once
which will improve performances and the time to first interaction 
