import { combineReducers } from 'redux';
import reservationsReducer from './reservationsReducer';

const rootReducer = combineReducers({
  reservations: reservationsReducer,
});

export default rootReducer;
