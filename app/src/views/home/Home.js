import React, { PropTypes } from 'react';
import { connect } from 'react-redux';


const Home = props => <div>
	{props.homeReducer.title}
</div>;

Home.propTypes = {
	homeReducer: PropTypes.shape({
		title: PropTypes.string,
	}),
};

export default connect(state => state)(Home);
