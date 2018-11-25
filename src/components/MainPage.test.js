import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

const mockProps = {
  onRequestRobots: jest.fn(),
  robots: [],
  searchField: '',
  isPending: false
}

let wrapper;

beforeEach(() => {
  wrapper = shallow(<MainPage { ...mockProps } />);
})

it('renders MainPage', () => {
  expect(wrapper).toMatchSnapshot();
})

it('shows the Loading text if pending is true', () => {
  const mockPropsWithPending = {
    ...mockProps,
    isPending: true
  }
  const wrapperWithPending = shallow(<MainPage { ...mockPropsWithPending } />);
  expect(wrapperWithPending.find('h1.loading').length).toEqual(1);
})

it('filters robots correctly', () => {
  expect(wrapper.instance().filterRobots()).toEqual([])

  const mockRobot = {
    id: 3,
    name: 'Jane',
    email: 'jane@email.com'
  }

  const mockProps2 = {
    ...mockProps,
    robots: [mockRobot],
    searchField: mockRobot.name.substring(0, 2)
  }
  const wrapper2 = shallow(<MainPage {...mockProps2 } />);
  expect(wrapper2.instance().filterRobots()).toEqual([mockRobot]);

  const mockProps3 = {
    ...mockProps2,
    searchField: 'nope'
  }
  const wrapper3 = shallow(<MainPage {...mockProps3 } />);
  expect(wrapper3.instance().filterRobots()).toEqual([]);
})
