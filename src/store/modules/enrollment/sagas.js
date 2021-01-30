import { all, takeLatest, put, call} from 'redux-saga/effects';
import { 
		createEnrollment, 
		cancelledEnrollment,
		indexEnrollment,
}from '../../../api/meetEnrollment';
import { 
	successRequest, 
	failureRequest,
	requestAllEnrollments,
	successRequestCreateEnrollment,
	successRequestDeleteEnrollment,
	endRequest,
 } from './actions';
export  function* getEnrollments({ payload }) {
	const { date, page } = payload;

	const enrollments = yield call(indexEnrollment, date, page);
	if(enrollments.error){
		yield put(failureRequest(enrollments.error));
		return;
	}
	yield put(successRequest(enrollments));
}
export function* setEnrollment({ payload }){
	const { id } = payload;
	const enroll = yield call(createEnrollment, id);
	if(enroll.error) {
		yield put(failureRequest(enroll.error));
		return;
	}
	yield put(successRequestCreateEnrollment());
	yield put(requestAllEnrollments());
}

export function* removeEnrollment({ payload }){
	const { id } = payload;
	const deleteEnroll = yield call(cancelledEnrollment,id);
	if(deleteEnroll.error) {
		yield put(failureRequest(deleteEnroll));
		return;
	}
	yield put(successRequestDeleteEnrollment());
	yield put(requestAllEnrollments());
	yield put(endRequest());
}


export default all ([
	takeLatest('@enrollment/GET_INITIAL_REQUEST', getEnrollments),
	takeLatest('@enrollment/SET_INITIAL_REQUEST', setEnrollment),
	takeLatest('@enrollment/DELETE_INITIAL_REQUEST', removeEnrollment),
	]);