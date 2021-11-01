import { appendRows, editRows, readSheet, removeRows } from './stein';

let url = 'https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/';
class SteinStore {
  read = (sheetName, { limit, offset, search } = {}) => {
    return readSheet(url, sheetName, {
      limit,
      offset,
      search
    });
  };

  append = (sheetName, rows ) => {
    return appendRows(url, sheetName, rows);
  };

  edit = (sheetName, { search, set, limit }) => {
    return editRows(url, sheetName, { search, set, limit });
  };

  remove = ( sheetName,{ search, limit }) => {
    return removeRows(url, sheetName, { search, limit });
  };

}

const steinStore = new SteinStore();
export default steinStore;