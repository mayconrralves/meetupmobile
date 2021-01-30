import { produce } from 'immer';

const INITIAL_STATE = {
	success: false,
	enrollments: [],
	msgFailure: '',
	createEnrollment: false,
	deleteEnrollment: false,
}

export default function enrollments(state=INITIAL_STATE, action) {
	switch (action.type) {
		case '@enrollment/SUCCESS_REQUEST':
			return produce(state, draft=> {
				draft.success = true;
				draft.enrollments = action.payload.enrollments;
			});
		case '@enrollment/SUCCESS_REQUEST_CREATE':
			return produce(state, draft=> {
				draft.createEnrollment = true;
			});
		case '@enrollment/SUCCESS_REQUEST_DELETE':
			return produce(state, draft=> {
				draft.deleteEnrollment = true;
			});
		case '@enrollment/FAILURE_REQUEST':
			return  produce(state, draft=>{
				draft.success = false;
				draft.msgFailure = action.payload.msg;
			});
		case '@enrollment/END_REQUEST':
			return produce(state, draft=>{
				draft.success = false;
				draft.createEnrollment = false;
				draft.deleteEnrollment = false;
			});
		default:
			return state;
	}
}
