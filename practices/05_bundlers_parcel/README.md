# Bundlers
(Module) Bundlers are tools to handle:
- compilations
- files reduction
- files optimizations and obfuscations

## Tools / Packages
- webpack: for big projects + heavily customable config.
- parcel: for small projects + fast and easy to config.
- rollup: good for packages creations
- vite, snowpack ...

## Parcel and Babel Configurations
### Install tools
- `npm install parcel @babel/preset-env @babel/preset-react --save-dev`
	- installs: 
		- parcel
		- babel preset env
		- abel preset react

### Set babel 
One of the two ways: 
- either as in the `05_bundlers_webpack` in the `package.json` ( deprecated )
	```json
	// package.json
	{
		"babel": {
			"presets": [
				"@babel/preset-env",
				"@babel/preset-react",
			]
		}
	}
	```
- either with the babel config file `.babelrc` ( deprecated )
	```shell
	{
		"babel": {
			"presets": [
				"@babel/preset-env",
				"@babel/preset-react",
			]
		}
	}
	```

- remove any package,json or .babelrc file: parcel includes parsers already


### Set `package.json` commands using parcel
```json
	{
		// ...
		"scripts": {
			"start": "parcel index.html",
			"build": "parcel build"
		}
	}

```

## Running the app
- run `npm start`
- all set