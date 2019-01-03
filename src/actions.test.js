import * as actions from './actions';

import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

// you might have a setup file
// and export the mockStore for all your tests
const mockStore = configureMockStore([thunkMiddleware]);

describe('setSearchField', () => {
  it('creates an action to search robots', () => {
    const text = 'hello';
    const expectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: text
    }

    expect(actions.setSearchField(text)).toEqual(expectedAction);
  })
})

describe('requestRobots', () => {
  it('handles the request robots API', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const actions = store.getActions();

    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING,
    }

    expect(actions[0]).toEqual(expectedAction)
  })
})
