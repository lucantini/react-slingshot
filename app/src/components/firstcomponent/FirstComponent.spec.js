import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FirstComponent from './FirstComponent';

describe('<FirstComponent />', () => {
	Enzyme.configure({ adapter: new Adapter() })

	it('should render one exampleParagraph', () => {
		const wrapper = mount(<FirstComponent />);
		expect(wrapper.find('p').props().className).toBe("exampleParagraph");
	});
});
