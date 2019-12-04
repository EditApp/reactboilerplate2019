import React from 'react';
import { shallow } from 'enzyme';

import Rating from '../index';

describe('<movieBlock />', () => {
  it('should render the Rating notice', () => {
    const renderedComponent = shallow(<Rating />);
    expect(
      renderedComponent.contains(
        <div></div>
      )
    ).toBe(true);
  });


});