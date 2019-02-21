import { combineReducers } from 'redux';
import LoginReducer from '../features/login/reducers';

export default combineReducers({
    login: LoginReducer
});