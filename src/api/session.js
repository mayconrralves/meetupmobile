import api from './api';

export const getUser = async ()=>{
	try {
		const { data } = await api.get('/user');
		return data;
	}catch(error){
		return error.response;
	}
}

export const signIn = async (email, password)=>{
	try{
		const result = await api.post('/signin', {
			email,
			password,
		});
		return result.data;
	}catch(error){
			return error.response.data;
	}
}

export const getCsrfToken = async () => {
	try{
		const { data } = await api.get('/getcsrf');
		api.defaults.headers.post['X-CSRF-Token'] = data.csrf;
		api.defaults.headers.put['X-CSRF-Token'] = data.csrf;
		api.defaults.headers.delete['X-CSRF-Token'] = data.csrf;
		return data.csrf;

	}catch(error){
		return error.response.data;
	}
}

export const logout = async () => {
	try {
		await api.get('/logout');
	}
	catch(error){
		return error.response;
	}
}