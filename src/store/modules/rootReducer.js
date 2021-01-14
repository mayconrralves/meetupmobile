import { combineReducers } from 'redux';


import auth from './auth/reducer';
import meet from './meet/reducer';
import user from './user/reducer';

export default combineReducers({
	auth, meet, user
});