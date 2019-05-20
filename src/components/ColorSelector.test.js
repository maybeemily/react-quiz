import React from 'react';
import { shallow } from 'enzyme';
import ColorSelector from './ColorSelector';

describe('Color selector', () => {
  it('renders the color selector', () => {
    const wrapper = shallow(<ColorSelector/>);
    expect(wrapper).toMatchSnapshot();
  });
});
