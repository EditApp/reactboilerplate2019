import React from 'react';
import { shallow } from 'enzyme';

import MovieVisualisation from '../index';

describe('<movieBlock />', () => {
  it('should render the MovieVisualisation notice', () => {
    const renderedComponent = shallow(<MovieVisualisation />);
    expect(
      renderedComponent.contains(
        <div>movie block</div>
      )
    ).toBe(true);
  });


});