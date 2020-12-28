import { all, takeLatest, put, call} from 'redux-saga/effects';
import {signIn, getCsrfToken, logout, getUser } from '../../../api/session';
import { signSuccess, signFailure } from './actions';

export function*  auth ( { payload } ){
    
		const { email, password } = payload;
		const  response = yield call(signIn,email,password);
		if(response.error){
			yield put(signFailure());
			
				return;
		}
		// const csrf = yield call(getCsrfToken);
		// if(csrf.error){
		// 	yield put(signFailure());
	
			return;
		}
		yield put(signSuccess(null));
}

export function* getCsrf(){
	
}

export function* signOut(){
	yield call(logout);
}

export default all([
	takeLatest('@auth/SIGN_IN_REQUEST', auth),
	takeLatest('@auth/CSRF_UPDATE', getCsrf),
	takeLatest('@auth/SIGN_OUT', signOut),
]);