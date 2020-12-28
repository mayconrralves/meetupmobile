import { produce } from 'immer';
const INITIAL_STATE = {
	loading: false,
	signed: false,
	csrf: null,

}

export default function auth (state=INITIAL_STATE, action){
	switch(action.type){
		case '@auth/SIGN_IN_REQUEST':
			return produce(state, draft=>{
				draft.loading = true;
			});
		case '@auth/SIGN_IN_SUCCESS':
			return produce(state, draft=>{
				draft.loading = false;
				draft.signed = true;
				draft.csrf = action.payload.csrf;
			});
		case '@auth/SIGN_IN_FAILURE':
			return produce(state, draft=>{
				draft.loading = false;
				draft.signed = false;
			});
		case '@auth/SIGN_OUT': 
			return produce(state, draft=>{
				draft.signed = false;
				draft.csrf = null;
			});
		default: return state;
		}
		
	}