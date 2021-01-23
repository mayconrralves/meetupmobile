export function requestMeetups(){
	return {
		type: '@meet/INITIAL_REQUEST',
	}
}

export function successRequest( meets ){
	return {
		type: '@meet/SUCCESS_REQUEST',
		payload: { meets }
	}
}

export function failureRequest( msg ){
	return {
		type: '@meet/FAILURE_REQUEST',
		payload: { msg }
	}
}

export function endRequest( ) {
	return {
		type: '@meet/END_REQUEST'
	}
}

