import {
  GET_SIZES,
} from './actionTypes';

const BASE_URL_ITEM = 'api/size';

export const getAllSize = () => async (dispatch) => {
  fetch(BASE_URL_ITEM)
    .then(async res => {
      const sizes = await res.json();
      dispatch({ type: GET_SIZES, sizes });
    }).catch(() => {
      dispatch({ type: GET_SIZES, sizes: []});
    });
};
