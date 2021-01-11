/**
 * @desc Dependencies
 */
import { combineReducers } from 'redux';

/**
 * @desc Reducers
 */
import SearchViewReducer from './SearchViewReducer';
import ErrorReducer from './ErrorReducer';

/**
 * @desc Export the reducers
 */
const Reducer = combineReducers({
    SearchViewReducer,
    ErrorReducer
});
  
  export default Reducer;