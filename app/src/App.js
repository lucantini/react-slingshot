/* @flow */

import React, { Component } from 'react';
import FirstComponent from './components/firstcomponent/FirstComponent';

export default class App extends Component {
	foo: number = 10;

	constructor(props:any){
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Good to go!</h1>
				<FirstComponent />
			</div>
		);
	}
}
