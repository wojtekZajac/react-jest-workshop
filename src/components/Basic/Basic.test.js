
import React from 'react';
import { shallow } from 'enzyme';
import Basic from './index';

it('renders name and jobType', () => {
    const props = {
        name: 'Wojtek test',
        jobType: 'test',
    };

    const wrapper = shallow(<Basic {...props}/>);
    expect(wrapper.text()).toEqual("Hi my name is Wojtek test and I'm a test");
});
