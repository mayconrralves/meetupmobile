export function requestMeetups(){
	return {
		type: '@enrollment/INITIAL_REQUEST',
	}
}

export function successRequest( enrollments ){
	return {
		type: '@enrollment/SUCCESS_REQUEST',
		payload: { enrollments }
	}
}

export function failureRequest( msg ){
	return {
		type: '@enrollment/FAILURE_REQUEST',
		payload: { msg }
	}
}

export function endRequest( ) {
	return {
		type: '@enrollment/END_REQUEST'
	}
}

