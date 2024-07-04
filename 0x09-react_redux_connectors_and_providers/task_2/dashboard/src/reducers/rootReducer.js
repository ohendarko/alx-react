import { combineReducers } from 'redux';
import notificationReducer from './notificationReducer';
import uiReducer from './uiReducer';
import courseReducer from './courseReducer';

const rootReducer = combineReducers({
  notifications: notificationReducer,
  ui: uiReducer,
  course: courseReducer,
});

export default rootReducer;