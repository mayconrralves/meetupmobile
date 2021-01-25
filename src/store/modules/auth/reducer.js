import { produce } from 'immer';
const INITIAL_STATE = {
	signed: false,
	csrf: null,
	msgFailure: ''

}

export default function auth (state=INITIAL_STATE, action){
	switch(action.type){
		case '@auth/SIGN_IN_SUCCESS':
			return produce(state, draft=>{
				draft.signed = true;
				draft.csrf = action.payload.csrf;
				draft.msgFailure = '';
			});
		case '@auth/SIGN_IN_FAILURE':
			return produce(state, draft=>{
				draft.signed = false;
				draft.msgFailure = action.payload.msg;
			});
		case '@auth/SIGN_OUT': 
			return produce(state, draft=>{
				draft.signed = false;
				draft.csrf = null;
				draft.msgFailure = '';
			});
		default: return state;
		}
		
	}