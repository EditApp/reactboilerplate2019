import React from 'react';
import { shallow } from 'enzyme';

import MovieItem from '../index';

describe('<movieBlock />', () => {
  it('should render the MovieItem notice', () => {
    const renderedComponent = shallow(<MovieItem />);
    expect(
      renderedComponent.contains(
        <div>movie block</div>
      )
    ).toBe(true);
  });


});