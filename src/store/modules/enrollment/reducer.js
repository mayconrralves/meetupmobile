import { produce } from 'immer';

const INITIAL_STATE = {
	success: false,
	enrollment: [],
	msgFailure: '',
}

export default function enrollments(state=INITIAL_STATE, action) {
	switch (action.type) {
		case '@enrollment/SUCCESS_REQUEST':
			return produce(state, draft=> {
				draft.success = true;
				draft.enrollments = action.payload.enrollments;
			});
		case '@enrollment/FAILURE_REQUEST':
			return  produce(state, draft=>{
				draft.success = false;
				draft.msgFailure = action.payload.msg;
			});
		case '@enrollment/END_REQUEST':
			return produce(state, draft=>{
				draft.success = false;
			});
		default:
			return state;
	}
}
