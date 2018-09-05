
import React from 'react';
import { shallow } from 'enzyme';
import Coverage from './index';

it('renders name and jobType', () => {
    const props = {
        name: 'Wojtek test',
        jobType: 'test',
    };

    const wrapper = shallow(<Coverage {...props}/>);
    expect(wrapper.text()).toEqual("Hi my name is Wojtek test and I'm a test");
});

it('handles no name param correctly', () => {
    const props = {
        name: null,
        jobType: 'test',
    };

    const wrapper = shallow(<Coverage {...props}/>);
    expect(wrapper.instance()).toEqual(null);
});
