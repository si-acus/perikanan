import {
  GET_ITEMS,
  CREATE_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM
} from './actionTypes';

const BASE_URL_ITEM = 'api/item';

export const getAllItem = () => async (dispatch) => {
  fetch(BASE_URL_ITEM)
    .then(async res => {
      const items = await res.json();
      dispatch({ type: GET_ITEMS, items });
    }).catch(() => {
      dispatch({ type: GET_ITEMS, items: []});
    });
};

// export const getByIdItem = id => async (dispatch) => {
//   fetch(`${BASE_URL_ITEM}/${id}`)
//   .then(res => {
//     dispatch({ type: GET_ITEMS, items: res.data });
//   }).catch(() => {
//     dispatch({ type: GET_ITEMS, items: [] });
//   });
// }


export const createItem = params => async (dispatch) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  };

  fetch(BASE_URL_ITEM, requestOptions)
    .then(() => {
      dispatch({ type: CREATE_ITEM, item: params });
    }).catch(() => {
    });
};

export const updateItem = params => async (dispatch) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  };

  fetch(BASE_URL_ITEM, requestOptions)
    .then(() => {
      dispatch({ type: UPDATE_ITEM });
    }).catch(() => {
    });
};

export const deleteItem = id => async (dispatch) => {
  const requestOptions = {
    method: 'DELETE',
  };

  fetch(`${BASE_URL_ITEM}/${id}`, requestOptions)
    .then(() => {
      dispatch({ type: DELETE_ITEM });
    }).catch(() => {
    });
};

