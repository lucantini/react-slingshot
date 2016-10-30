/* @flow */

import React from 'react';
import FirstComponent from './components/firstcomponent/FirstComponent';
import style from './App.styl';

const App = () => (
	<div>
		<h1 className={style.exampleClass}>Good to go!</h1>
		<p className={style.anotherExampleClass}>Uhul</p>
		<FirstComponent />
	</div>
);

export default App;
