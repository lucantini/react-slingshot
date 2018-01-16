# React Slingshot

This is a base project, created to serve as a slingshot for all future React endeavors. This repo is already set up with folder structure, redux, eslint, editor config and testing.

## Folder Structure

```
app
└───core
│   └───helpers
│   └───models
│   └───services
└───src
|   |   index.js
|   │   index.spec.js
|   └───components
|   └───container
|   └───assets
|   └───routes
|   └───views
└───webpack
|   │   webpack.config.default.js
|   |   webpack.config.dev.js  
|   │   webpack.config.props.js
server
└───index.js
└───renderRouter.js
view
└───index.js
.babelrc
.editorconfig
.eslintrc
.gitignore
jest.config.js
package.json
README.md
```

## Installation

All base dependencies are managed by NPM and are already in this package.json. Simply run:

```
$ npm install
```

## Development

Builds the application in dev mode and starts a webserver with hot reload. By default the webserver starts at port 1337.

```
$ npm start
```

## Tests

I've decided that all the tests will be siblings to their respective files. For example, a Header.js component will have a header.spec.js defining it behaviour in the same folder.

```
$ npm test
```
I use [Jest](https://facebook.github.io/jest/) and [Chai](http://chaijs.com/) as my test frameworks. I also use [Enzyme](https://github.com/airbnb/enzyme) for React component testing.

I also use [Istanbul](https://istanbul.js.org/) for coverage testing - check if everything is indeed tested, or covered - just run them with:

```
$ npm run coverage
```
The default values of the coverage-check are 60%. You can change the minimun at any time. But if you have less than 60% the script will exit with code 1

```
$ npm run coverage-check
```

## Flow

We choose [Flow](https://flowtype.org) for put in the types of parameters and returns.

## CSS

We use [CSS4](http://css4.rocks/)(not official).
Also, for class namings and conventions we use the [BEM](https://css-tricks.com/bem-101/) standard.

## Linting

I use the [AirBnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) linter as my [linter](http://eslint.org/).

## Front Frameworks

[React](https://facebook.github.io/react/) + [Redux](http://redux.js.org/). Pretty straight forward.
