import { AxiosError, AxiosResponse } from "axios";
import { authInstance, baseInstance } from "./apiCreator";
import { IAuthData } from "./types";
type ResponseOrError = AxiosResponse<any> | AxiosError<any>;

class API {
	async signup(data: IAuthData): Promise<ResponseOrError> {
		try {
			const response = await baseInstance.post("/register/", data);
			return response;
		} catch (error) {
			throw error as AxiosError;
		}
	}
	async tempsignup(data: {
		email: string;
		phone: string;
	}): Promise<ResponseOrError> {
		try {
			const response = await baseInstance.post("/secret-key/", data);
			return response;
		} catch (error) {
			throw error as AxiosError;
		}
	}
	async getFlexLoginUrl(): Promise<ResponseOrError> {
		try {
			const response = await authInstance.get("/challenge-link/");
			return response;
		} catch (error) {
			throw error as AxiosError;
		}
	}
	async flexLogin(data: { url: string }): Promise<ResponseOrError> {
		try {
			const response = await authInstance.post("/flex-login/", data);
			return response;
		} catch (error) {
			throw error as AxiosError;
		}
	}
	async login(data: IAuthData): Promise<AxiosResponse<any>> {
		try {
			const response = await baseInstance.post("/login/", data);
			return response;
		} catch (error) {
			throw error as AxiosError;
		}
	}
}
export default API;
