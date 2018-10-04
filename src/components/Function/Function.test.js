import React from 'react';
import { shallow } from 'enzyme';

import FunctionComponent, { makeFirstLetterUppercase }  from './index';

describe('Function test', () => {
    it('renders name and jobType', () => {
        const props = {
            name: 'Wojtek',
            surname: 'Zajac',
            jobType: 'Developer',
        };

        const functionToBeCalled = null;

        const testedComponent = shallow(
            <FunctionComponent 
                {...props}
                onClickHandler={functionToBeCalled} 
            />
        );
    });

    test('makeFirstLetterUppercase transforms text correctly', () => {
    });
});

