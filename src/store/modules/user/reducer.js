import { produce } from 'immer';
const  INITIAL_STATE={
	success: false,
	msgFailure: '',
	user: null
};


export default function user(state=INITIAL_STATE, action){
	switch (action.type) {
		case '@user/CREATE_USER':
			return produce(state, draft=> {
				draft.msgFailure='';
			});
			case '@user/UPDATE_USER':
			return produce(state, draft=> {
				draft.msgFailure='';
			});
		case '@user/SUCCESS_REQUEST':
			return produce(state, draft=>{
				draft.success = true;
				draft.user = action.payload.user;
			});
		case '@user/FAILURE_REQUEST':
			return produce(state, draft=> {
				draft.success = false;
				draft.msgFailure = action.payload.msg;
			})
		default:
		return state;
	}
}