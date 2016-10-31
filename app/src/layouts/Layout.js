/* @flow */

import React from 'react';
import logo from 'images/Logo_MA_Blocada_Colorida.png';

import FirstComponent from '../components/firstcomponent/FirstComponent';
import style from './App.styl';

const Layout = () => (
	<div>
		<img src={logo} alt="Teste" />
		<h1 className={style.exampleClass}>Good to go!</h1>
		<p className={style.anotherExampleClass}>Uhul</p>
		<FirstComponent />
	</div>
);

export default Layout;
