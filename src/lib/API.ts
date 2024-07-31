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
	async login(data: Omit<IAuthData, "user_name">): Promise<AxiosResponse<any>> {
		try {
			const response = await baseInstance.post("/login/", data);
			return response;
		} catch (error) {
			throw error as AxiosError;
		}
	}
	async resetPassword(data: { email: string }): Promise<ResponseOrError> {
		try {
			const response = await baseInstance.post(`/password-reset/`, data);
			return response;
		} catch (error) {
			throw error as AxiosError;
		}
	}
	async confirmPasswordReset(data: {
		token: string;
		uidb64: string;
		new_password: string;
	}): Promise<ResponseOrError> {
		try {
			const response = await baseInstance.post(
				`/password-reset-confirm/`,
				data,
			);
			return response;
		} catch (error) {
			throw error as AxiosError;
		}
	}
	async resendEmail(data: { email: string }): Promise<ResponseOrError> {
		try {
			const response = await baseInstance.post("/resend-email/", data);
			return response;
		} catch (error) {
			throw error as AxiosError;
		}
	}
	async getStats(): Promise<ResponseOrError> {
		try {
			const response = await authInstance.get("/dash/stat/");
			return response;
		} catch (error) {
			throw error as AxiosError;
		}
	}
	async getReferrals(data: {
		start_date: string;
		end_date: string;
	}): Promise<ResponseOrError> {
		try {
			const response = await authInstance.post(`/dash/referrals/`, data);
			return response;
		} catch (error) {
			throw error as AxiosError;
		}
	}
	async getChartData(data: { year: string }): Promise<ResponseOrError> {
		try {
			const response = await authInstance.post(`/dash/chart/`, data);
			return response;
		} catch (error) {
			throw error as AxiosError;
		}
	}
	async contactUs(data: {
		first_name: string;
		last_name: string;
		subject: string;
		message: string;
	}): Promise<ResponseOrError> {
		try {
			const response = await authInstance.post(`/contact/`, data);
			return response;
		} catch (error) {
			throw error as AxiosError;
		}
	}
	async changePassword(data: {
		old_password: string;
		new_password: string;
	}): Promise<ResponseOrError> {
		try {
			const response = await authInstance.post(`/change-password/`, data);
			return response;
		} catch (error) {
			throw error as AxiosError;
		}
	}
}
export default API;
