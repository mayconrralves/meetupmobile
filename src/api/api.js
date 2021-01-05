import axios from 'axios';

const api = axios.create({
	baseURL: "http://157.230.62.196",
	//withCredentials: true 
});


export default api;