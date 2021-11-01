import {
  GET_ITEMS,
  CREATE_ITEM,
} from '../actions/actionTypes';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return action.items;
    case CREATE_ITEM:
      return [...state.items, action.item];
    default:
      return state;
  }
}
