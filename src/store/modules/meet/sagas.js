import { all, takeLatest, call, put } from 'redux-saga/effects';
import {successRequest,failureRequest,requestMeetups } from './actions';
import { indexMeet, indexAllMeets } from '../../../api/meet';

export function* getMeetups(){
	const response = yield call(indexAllMeets);
	if(response.error){
		yield put(failureRequest());
		return;
	}
	yield put(successRequest(response));
}


export default all([
	// takeLatest('@auth/CSRF_UPDATE', getMeetups),
	takeLatest('@meet/INITIAL_REQUEST', getMeetups),
]);