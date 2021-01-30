export function requestAllEnrollments(date, page){
	return {
		type: '@enrollment/GET_INITIAL_REQUEST',
		payload: { date, page}
	}
}

export function requestSetEnrollment( id ){
	return {
		type: '@enrollment/SET_INITIAL_REQUEST',
		payload: { id },
	}
}

export function requestDeleteEnrollment( id ){
	return {
		type: '@enrollment/DELETE_INITIAL_REQUEST',
		payload: { id },
	}
}


export function successRequest( enrollments ){
	return {
		type: '@enrollment/SUCCESS_REQUEST',
		payload: { enrollments }
	}
}

export function successRequestCreateEnrollment( ){
	return {
		type: '@enrollment/SUCCESS_REQUEST_CREATE',
	}
}

export function successRequestDeleteEnrollment( ){
	return {
		type: '@enrollment/SUCCESS_REQUEST_DELETE',
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

