import { all, takeLatest, put, call} from 'redux-saga/effects';
import {signIn, getCsrfToken, logout, getUser } from '../../../api/session';
import { signSuccess, signFailure, csrfFailure } from './actions';


export function* getCsrf(){
		const csrf = yield call(getCsrfToken);
		if(csrf.error){
			yield put(csrfFailure(csrf.error));
			return;
		}
		yield put(signSuccess(csrf));
}

export function*  auth ( { payload } ){
    
		const { email, password } = payload;
		const  response = yield call(signIn,email,password);
		if(response.error){
			yield put(signFailure(response.error));
			return;
		}
		yield getCsrf();
}

export function* signOut(){
	yield call(logout);
}

export default all([
	takeLatest('@auth/SIGN_REQUEST', auth),
	takeLatest('@auth/CSRF_UPDATE', getCsrf),
	takeLatest('@auth/SIGN_OUT', signOut),
]);