export const createUser = ( name, email, password, confirmPassword ) => {
	return {
		type: '@user/CREATE_USER',
		payload: {
			name,
			email,
			password,
			confirmPassword
		}
	}
}

export const updateUser = (user) => {
	return {
		type: '@user/UPDATE_USER',
		payload: {
			user
		}
	}
}

export const successRequest = (user) => {
	return {
		type: '@user/SUCCESS_REQUEST',
		payload : { user }
	}
}

export const failureRequest = (msg)=> {
	return {
		type: '@user/FAILURE_REQUEST',
		payload: { msg }
	}
}

export function endRequest( ) {
	return {
		type: '@user/END_REQUEST'
	}
}
