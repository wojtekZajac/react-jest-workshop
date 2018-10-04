
import React from 'react';
import { shallow } from 'enzyme';
import TestFirst from './index';

describe('Basic component test', () => {
    it('renders name and jobType', () => {
        const props = {
            items: [
                {
                    type: 'dog',
                    name: 'Rambo',
                },
                {
                    type: 'dog',
                    name: 'Szarik',
                },
                {
                    type: 'cat',
                    name: 'Filemon',    
                },
            ]
        }

        const wrapper = shallow(<TestFirst {...props} />);
        expect(wrapper.find('p')).toHaveLength(3);
        expect(wrapper.find('p.cat').text()).toEqual('Filemon');
    });
});
