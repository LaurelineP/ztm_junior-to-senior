# Seen doing these exercise

## Installation
project creation
- `npx create-react-app <project-name>`

project installation
-`npm install`

## Component props
`props` are what a component child receive from its parent ( the component
that invoked it ).
In order to initiate a child component to be aware of the parent's data passed down,
such as object inheritance concerns, we need to tell the extended React.Component to subscribe to the props received from the parent.

```jsx
// initials a class based component with props
class MyComponent extends Component
	constructor(props){
		// assign inherited props to this component
		super(props)
	}
	render(){
		return(
			<JSX>
		)
	}
```


## State and update
- `this.state` representing the state of a component that 
need to be declared within the class based component constructor.
Note: a component with state is a stateful component ( a commenting with the state logic )

```jsx
// initial state in class based component
class MyComponent extends Component
	constructor(){
		this.state = {
			<property>: <value>
		}
	}
	render(){
		return(
			<JSX>
		)
	}
```

```jsx
// update a class bases component state () - 
this.setState({
	// (optional) update the entire state by restoring the previous state
	...this.state, 

	// updates the concerned property
	<property>: <value>
})
```

### Hosting inner project react
- at the react project level
	- src/public/index.html {PUBLIC_PATH} should be a relative path
	- then run `npm run build`
	- then in the `build/index.html` put relative path by
	 prepending `.` before the path separator
	 ![Alt text](image.png)


--------------

# REACT HOOKS
Once the component based approach has been done,
the practice is to convert the current code with hooks ( react 16.8+ )
Hooks are mainly function and provide the ability to reuse/share state logic between 
component alongside more feature.
The motivation: 
https://legacy.reactjs.org/docs/hooks-intro.html#motivation
- hard to reuse logic between component
- hard to maintain large component - not readable anymore
- class confuses both developers and machines

## "Robot friends project"
1. Must get back the robot friends project
2. Must transform the app: component based to functional based with hooks
### Cloned repo: issues encountered - installation related: 
- SCSS
After cloning the repo + installing the project: had quite a lot of issue 
as the project uses scs:
 - create-react-app used to install node-sass which is nowadays deprecated / install node
 ( see #Solution section bellow )

- ReportWebVitals:
Just remove the web vitals and you are good ( as we did not dived into its functionalities )

#### Solution
In order to get scss feature - we need to :
https://create-react-app.dev/docs/adding-a-sass-stylesheet/
- uninstall `node-sass`: `npm uninstall node-sass`
- install `sass` instead : `npm i sass --save-dev`
Then there are no more scss issues


-----------

REACT AND REDUX

### Conceptions steps 
![Alt text](../../assets/image-1.png)
Conception steps to follow
- action(s): a client action triggering an action creator for the reducer(s) concerned to handle
> Dispatching an action
- reducer(s): a function having as sole responsibility to update a part of 
the unique source of truth, unique state management object : the store
- the store: an object computation representing and containing the whole application state,
when it changes, react handles the diff to update the correct subscribed UI/view
- the UI/views: the component that need to update

1. create one action file ( or the one you need )
	- this would list `action creators`: functions dispatching an action type and may includes a payload

2. create a reducer file
	- for a same concern, this would be a switch case relying on a given arguments `action.type` ( action type === action name )
	and will proceed to the update to make to the store

3. create store file: 
	- this will represent your application whole state
		- it can have multiple decoupled reducers that will be merged together
		- it can also represent only one reducer

4. in the root application file:
	- import the store using
	- plug the store to the app
		- `import { Provider, connect } from 'react-redux'`
			- Provider: 
			- connect: API allowing to connect react to redux

5. redux devtools
