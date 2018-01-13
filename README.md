# React Slingshot

This is a base project, created to serve as a slingshot for all future endeavors. This repo is already set up with folder structure, eslint, editor config and testing.

## Folder Structure

```
app
└───core
│   └───controllers
│   └───helpers
│   └───models
│   └───services
└───src
|   |   index.js
|   │   index.spec.js
|   └───components
|   └───container
|   └───layouts
|   └───routes
|   └───views
└───webpack
|   │   webpack.config.default.js
|   |   webpack.config.dev.js  
|   │   webpack.config.props.js
└───server
|   │   index.js
|   |   renderRouter.js
└───view
|   │   index.js
.babelrc
.editorconfig
.eslintrc
.gitignore
jest.config.js
mocha.opts
package.json
README.md
```

## Installation

All of my base dependencies are managed by NPM and are already in this package.json. Simply run:

```
$ npm install
```
(May require sudo)

## Development

Builds the application in dev mode and starts a webserver with hot reload. By default the webserver starts at port 3333.
Just run:

```
$ npm run dev
```

## Tests

I've decided that all the tests will be siblings to their respective files. For example, a Header.js component will have a header.spec.js defining it behaviour in the same folder. To run tests:

```
$ npm test
```
I use [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/) as my test frameworks. I also use [Enzyme](https://github.com/airbnb/enzyme) for React component testing.

I also use [Istanbul](https://istanbul.js.org/) for coverage testing - check if everything is indeed tested, or covered - just run them with:

```
$ npm run cover
```

## Flow

I use [Flow](https://flowtype.org) for put in the types of parameters and returns.

## CSS

I've used [SASS](http://sass-lang.com/).
Also, for class namings and conventions I use the [BEM](https://css-tricks.com/bem-101/) standard.

## Linting

I use the [AirBnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) linter as my [eslint](http://eslint.org/).

## Front Frameworks

[React](https://facebook.github.io/react/) + [Redux](http://redux.js.org/). Pretty straight forward.
