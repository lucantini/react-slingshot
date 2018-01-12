import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Home = props => (
	<div>
		{props.title}
	</div>
);

Home.propTypes = {
	title: PropTypes.string,
};

Home.defaultProps = {
	title: 'Titulo',
};

export default connect(state => state.homeReducer)(Home);
