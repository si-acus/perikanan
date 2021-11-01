import {
  GET_AREAS,
} from './actionTypes';

const BASE_URL_ITEM = 'api/area';

export const getAllArea = () => async (dispatch) => {
  fetch(BASE_URL_ITEM)
    .then(async res => {
      const areas = await res.json();
      dispatch({ type: GET_AREAS, areas });
    }).catch(() => {
      dispatch({ type: GET_AREAS, areas: []});
    });
};
