/* @flow */

import React, { Component } from 'react';
import FirstComponent from './components/firstcomponent/FirstComponent';
import style from './App.styl';

export default class App extends Component {
	constructor(props:any) {
		super(props);
		console.log('gg');
	}
	render() {
		return (
			<div>
				<h1 className={style.exampleClass}>Good to go!</h1>
				<p className={style.anotherExampleClass}>Uhul</p>
				<FirstComponent />
			</div>
		);
	}
}
