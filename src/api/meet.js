import api from './api';

export const indexMeet = async() => {
	try{
		const { data } = await api.get('/meet/index');
		return data;
	}catch(error){
		return error.response ? error.response.data : {'error':error.message};
	}
}

export const addBanner = async (file) => {
	try {
		const formData = new FormData();
		formData.append('file', file);
		const  { data }  = await api.post('/meet/banner', formData);
		return data;
	}catch(error){
		return error.response ? error.response.data : {'error':error.message};
	}
}

export const createMeet = async ( { title, localization, description, date, banner_id } ) => {
	try {
		const { data } = await api.post('/meet/store',{
			title,
			localization,
			description,
			date,
			banner_id
		});

		return data;
	}catch(error){
		return error.response ? error.response.data : {'error':error.message};
	}
}

export const updateMeet = async (id, meet) => {
	try {
		const { data } = await api.put(`/meet/update`, {
			...meet,
		}, {
			params: {
				id,
			}
		});

		return data;
		
	}catch(error){
		return error.response ? error.response.data : {'error':error.message};
	}
}

export const deleteMeet = async (id) => {
	try {
			const { data } = await api.delete('/meet/delete', {
			params: { id }
		});
		return data;
	}catch(error){
		return error.response ? error.response.data : {'error':error.message};
	}
}

export const indexAllMeets = async ()=> {
	try {
		const { data } = await api.get('/meets/all');
		return data;
	}catch(error) {
		return error.response ? error.response.data : {'error':error.message};
	}
}


