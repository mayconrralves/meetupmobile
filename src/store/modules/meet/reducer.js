import { produce } from 'immer';

const INITIAL_STATE = {
	success: false,
	meets: [],
	failure: false,
}

export default function meets(state=INITIAL_STATE, action) {
	switch (action.type) {
		case '@meet/SUCCESS_REQUEST':
			return produce(state, draft=> {
				draft.success = true;
				draft.failure = false;
				draft.meets = action.payload.meets;
			});
		case '@meet/FAILURE_REQUEST':
			return  produce(state, draft=>{
				draft.success = false;
				draft.failure = true;
			});
		
		default:
			return state;
	}
}

