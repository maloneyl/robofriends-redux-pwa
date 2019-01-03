import * as actions from './actions';

import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';

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
