import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

const mockProps = (customProps = {}) => {
  return {
    onRequestRobots: jest.fn(),
    robots: customProps.robots || [],
    searchField: customProps.searchField || '',
    isPending: customProps.isPending || false
  }
}

it('renders MainPage', () => {
  const wrapper = shallow(<MainPage { ...mockProps() } />);

  expect(wrapper).toMatchSnapshot();
})

it('shows the Loading text if isPending is true', () => {
  const wrapper = shallow(<MainPage { ...mockProps({ isPending: true }) } />);

  expect(wrapper.find('h1.loading').length).toEqual(1);
})

describe('filtering robots', () => {
  it('returns an empty list when there are no robots', () => {
    const wrapper = shallow(<MainPage { ...mockProps() } />);

    expect(wrapper.instance().filterRobots()).toEqual([]);
  })

  const janeRobot = { id: 3, name: 'Jane', email: 'jane@email.com' };
  const daveRobot = { id: 4, name: 'Dave', email: 'dave@email.com' };

  it('returns all robots when searchField is empty', () => {
    const wrapper = shallow(<MainPage { ...mockProps({ robots: [janeRobot, daveRobot] }) } />);

    expect(wrapper.instance().filterRobots()).toEqual([janeRobot, daveRobot]);
  })

  it('returns only the robots with names that at least partially match the searchField text', () => {
    const customProps = {
      robots: [janeRobot, daveRobot],
      searchField: janeRobot.name.substring(0, 2)
    };
    const wrapper = shallow(<MainPage { ...mockProps(customProps) } />);

    expect(wrapper.instance().filterRobots()).toEqual([janeRobot]);
  })

  it('returns an empty list when there are no robots with names that match the searchField text', () => {
    const customProps = {
      robots: [janeRobot, daveRobot],
      searchField: 'nope'
    };
    const wrapper = shallow(<MainPage { ...mockProps(customProps) } />);

    expect(wrapper.instance().filterRobots()).toEqual([]);
  })
})
