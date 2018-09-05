
import React from 'react';
import { shallow } from 'enzyme';
import Basic from './index';

it('renders name and jobType', () => {
    const props = {
        name: 'John Doe',
        jobType: 'Frontend Developer',
    };

    const wrapper = shallow(<Basic {...props}/>);
    expect(wrapper.text()).toEqual("Hi my name is John Doe and I'm a Frontend Developer");
});
