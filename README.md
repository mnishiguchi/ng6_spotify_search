# NG6 Spotify Search

## Basic Functionalities:

 - Enter a keyword to search for.
 - Select "artist" or "track" as the search type.
 - Have the names of all search results print as a list.

## TODO:

 - Add a "Showing X-X of X results found" message.
 - Setup pagination links for accessing the next page of results.

# Getting Started
## Dependencies
Tools needed to run this app:
* `node` and `npm`
Once you have these, install the following as globals:  
`npm install -g gulp karma karma-cli webpack`

## Installing
* `fork` this repo
* `clone` your fork
* `npm install -g gulp karma karma-cli webpack` install global cli dependencies
* `npm install` to install dependencies

## Running the App
NG6 uses Gulp to build and launch the development environment. After you have installed all dependencies, you may run the app. Running `gulp` will bundle the app with `webpack`, launch a development server, and watch all files. The port will be displayed in the terminal.

### Gulp Tasks
* `gulp webpack`
  * runs Webpack, which will transpile, concatenate, and compress (collectively, "bundle") all assets and modules into `dist/bundle.js`. It also prepares `index.html` to be used as application entry point, links assets and created dist version of our application.
* `gulp serve`
  * starts a dev server via `webpack-dev-server`, serving the client folder.
* `gulp watch`
  * alias of `serve`
* `default` (which is the default task that runs when typing `gulp` without providing an argument)
	* runs `serve`.
* `gulp component --name componentName`
  * scaffolds a new Angular component.

### Deploy to [Surge](https://surge.sh/)

```
npm install --global surge
```

```
gulp webpack
cd dist
surge
```
