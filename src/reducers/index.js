import { combineReducers } from 'redux';
import items from './ItemReducer';
import areas from './AreaReducer';
import sizes from './SizeReducer';

export default combineReducers({
  items,
  areas,
  sizes
});
