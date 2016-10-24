/* @flow */

import React, { Component } from 'react';
import FirstComponent from './components/firstcomponent/FirstComponent';
import style from './App.styl';

export default class App extends Component {
	constructor(props:any) {
		super(props);
		props.length();
	}
	render() {
		return (
			<div>
				<h1 className={style.exampleClass}>Good to go!</h1>
				<p className={style.anotherExampleClass}>macaco</p>
				<FirstComponent />
			</div>
		);
	}
}
