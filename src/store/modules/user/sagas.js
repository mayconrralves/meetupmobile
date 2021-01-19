import { all, takeLatest, put, call} from 'redux-saga/effects';
import { successRequest, failureRequest } from './actions';
import { getUser } from '../../../api/session';
import { updateUser, createUser } from '../../../api/user';

export function* createUserRequest( { payload } ){
	const {name, email, password, confirmPassword } = payload;
	const response = yield call(createUser, name, email, password, confirmPassword);
	if(response.error){
		yield put(failureRequest(response.error));
		return;
	}
	yield put(successRequest());
}

export function* updateUserRequest({ payload }){
	const {user} = payload;
	const response = yield call(updateUser, user, null);

	if(response.error){
		yield put(failureRequest(response.error));
		return;
	}
	yield put(successRequest(user));

}

export function* getUserRequest(){
	const user = yield call(getUser);
	yield put(successRequest(user));
}
export default all([
		takeLatest('@user/CREATE_USER', createUserRequest),
		takeLatest('@user/UPDATE_USER', updateUserRequest),
		takeLatest('@auth/SIGN_IN_SUCCESS', getUserRequest),
	]);