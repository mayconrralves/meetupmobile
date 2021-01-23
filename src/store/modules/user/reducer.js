import { produce } from 'immer';
const  INITIAL_STATE={
	success: false,
	msgFailure: '',
	user: null
};


export default function user(state=INITIAL_STATE, action){
	switch (action.type) {
		case '@user/SUCCESS_REQUEST':
			return produce(state, draft=>{
				draft.success = true;
				draft.user = action.payload.user;
				draft.msgFailure='';
			});
		case '@user/FAILURE_REQUEST':
			return produce(state, draft=> {
				draft.success = false;
				draft.msgFailure = action.payload.msg;
			});
		case '@user/END_REQUEST':
			return produce(state, draft=>{
				draft.success = false;
			});
		default:
			return state;
	}
}