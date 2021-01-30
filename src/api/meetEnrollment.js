import api from './api';

export const createEnrollment = async (id) => {
	try {
		const { data } = await api.post('/meet/enrollment', null, {
			params: { id },
		});

		return data;
	}catch(error){
		return error.response ? error.response.data : {'error':error.message};
	}
}

export const cancelledEnrollment = async (idMeet) => {
	try {
		const  { data } = await api.put('/meet/enrollment/update', null, {
			params: { id : idMeet},
		});
		return data;

	}catch(error){
		return error.response ? error.response.data : {'error':error.message};
	}
}

export const indexEnrollment = async (date, page) => {
	try {
		const { data } = await api.get('/meet/enrollment/index', {
			params: {
				date,
				page,
			}
		});

		return data;

	}catch(error){
		return error.response ? error.response.data : {'error':error.message};
	}
}