import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expects to render CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'Jane Smith',
      username: 'JaneSmith',
      email: 'jane@smith.com'
    }
  ]

  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})
