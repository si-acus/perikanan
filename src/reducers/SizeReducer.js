import {
  GET_SIZES
} from '../actions/actionTypes';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_SIZES:
      return action.sizes;
    default:
      return state;
  }
}
