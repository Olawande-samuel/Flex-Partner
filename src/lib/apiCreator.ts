import axios from "axios";
const BASEURL = import.meta.env.VITE_BASE_URL;

const baseInstance = axios.create({
	baseURL: BASEURL,
	headers: {
		"Content-Type": "application/json",
	},
});

const authInstance = axios.create({
	baseURL: BASEURL,
	headers: {
		"Content-Type": "application/json",
	},
	validateStatus: function (status) {
		return status >= 200 && status < 300;
	},
});

authInstance.interceptors.request.use(
	(config) => {
		const user = JSON.parse(localStorage.getItem("user") as string);
		if (user) {
			config.headers.Authorization = "Token " + user.state.state.token;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

authInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error?.response?.status === 401) {
			window.location.replace("/login");
		}
		return Promise.reject(error);
	},
);
export { authInstance, baseInstance };
