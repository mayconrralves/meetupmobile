import { produce } from 'immer';

const INITIAL_STATE = {
	success: false,
	meets: [],
	msgFailure: '',
}

export default function meets(state=INITIAL_STATE, action) {
	switch (action.type) {
		case '@meet/INITIAL_REQUEST':
			return produce(state, draft => {
				draft.msgFailure = '';
			});
		case '@meet/SUCCESS_REQUEST':
			return produce(state, draft=> {
				draft.success = true;
				draft.meets = action.payload.meets;
			});
		case '@meet/FAILURE_REQUEST':
			return  produce(state, draft=>{
				draft.success = false;
				draft.msgFailure = action.payload.msg;
			});
		
		default:
			return state;
	}
}

