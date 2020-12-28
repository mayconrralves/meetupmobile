import api from './api';

export const createUser = async(name, email, password,confirmPassword)=>{
	try{
		const { data } = await api.post('/signup',{
			name,
			email,
			password,
			confirmPassword
		});
		return data;
	}
	catch(error){
		return error.response.data;
	}
}

export const updateUser = async(user) => {

	/*
		{name, email, oldPassword, password, confirmPassword}
	*/
	try {
		const { data } = await api.put('/user/update', {
			...user
		});
		return data;

	}catch(error){
		return error.response.data;
	}
}

export const addAvatar = async(file) => {
	try {
		const formData = new FormData();
		formData.append('file', file);
		const  { data }  = await api.post('/user/avatar', formData);
		return data;
	}catch(error){
		return error.response.data;
	}
}



