import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FirstComponent from '../../components/FirstComponent/FirstComponent';

import './Home.css';

const Home = props => (
	<div>
		<FirstComponent />
		<div className="home__title">
			{props.title}
		</div>
	</div>
);

Home.propTypes = {
	title: PropTypes.string,
};

Home.defaultProps = {
	title: 'Titulo',
};

export default connect(state => state.homeReducer)(Home);
