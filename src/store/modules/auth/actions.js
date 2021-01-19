export function signInRequest(email, password){
	
	return {
		type: '@auth/SIGN_IN_REQUEST',
		payload: { email, password },
	}
}

export function csrfUpdate(){
	return {
		type: '@auth/CSRF_UPDATE',
	}
}
export function signSuccess(csrf){
	return {
		type: '@auth/SIGN_IN_SUCCESS',
		payload: { csrf }
	}
}

export function signFailure(msg){
	return {
		type: '@auth/SIGN_IN_FAILURE',
		payload: { msg }
	}
}

export function signOut(){
	return {
		type: '@auth/SIGN_OUT'
	}
}