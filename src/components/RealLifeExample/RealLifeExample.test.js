import React from 'react';
import { shallow } from 'enzyme';

import ShowMore from './index';

describe('ShowMore test', () => {
    test('matches the snapshot', () => {

        const mockFunction = jest.fn();

        const props = { 
            isActive: true, isCollapsed: false, 
            collapsedHeight: 100, 
            expandedHeight: 100, 
            onToggleFunction: mockFunction,
            showLessLabel: 'Less', 
            showMoreLabel: 'More',
        }
    
        const testedComponent = shallow( 
            <ShowMore {...props}>
                <p>Test</p>
            </ShowMore>
        );
    });
});
