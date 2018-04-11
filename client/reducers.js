/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import polls from './modules/Poll/PollReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  polls,
});
