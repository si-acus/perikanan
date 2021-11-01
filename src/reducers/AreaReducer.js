import {
  GET_AREAS
} from '../actions/actionTypes';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_AREAS:
      return action.areas;
    default:
      return state;
  }
}
