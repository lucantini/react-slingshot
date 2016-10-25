import React, { Component } from 'react';
import style from './FirstComponent.styl';

export default class FirstComponent extends Component {
	render() {
		return (
			<p className={style.exampleParagraph}>You are set up!</p>
		);
	}
}
