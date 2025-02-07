import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
	baseURL: import.meta.env.VITE_DATABASE_URL,
});

api.interceptors.request.use((config) => {
	const auth_token = Cookies.get("auth_token");

	if (auth_token) {
		config.headers.Authorization = `Bearer ${auth_token}`;
	}

	return config;
});
