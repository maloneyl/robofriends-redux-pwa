import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';

it('expects to render Card component', () => {
  expect(shallow(<Card />).length).toEqual(1)
})
