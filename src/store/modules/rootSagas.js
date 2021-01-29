import { all } from 'redux-saga/effects';
import auth from './auth/sagas';
import meet from './meet/sagas';
import user from './user/sagas';
import enrollment from './enrollment/sagas';

export default function* rootSaga(){
	return yield all( [ auth, user,  meet, enrollment ] );
}