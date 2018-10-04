import React from 'react';
import { shallow } from 'enzyme';

import Snapshot from './index';

describe('Function test', () => {
    it('matches the snapshot', () => {
        const props = { name: 'John', jobType: 'frontend developer' };

        const testedComponent = shallow(
            <Snapshot 
                {...props}
            />
        );
    });
});
