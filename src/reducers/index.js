import { combineReducers } from 'redux';
import CCReducer from './reducer_cc';
import AdminReducer from './reducer_admin';
import CODReducer from './reducer_cod';

const rootReducer = combineReducers({
  cc : CCReducer,
  admin: AdminReducer,
  cod: CODReducer
});

export default rootReducer;
