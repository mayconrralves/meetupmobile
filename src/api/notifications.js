import api from './api';

export const notificationsIndex = async () => {
	
	try {
		const { data } = await api.get('/meet/notifications');

		return data;

	}catch(error){
		return error.response;
	}
}

export const notificationsUpdate = async (id) => {

	try {
		const { data } = await api.put('/meet/notifications/update', null, {
			params: { id },
		});

		return data ;

	}catch(error){
		return error.response;
	}
}