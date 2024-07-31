export interface ISidebarItem {
	id: number;
	name: string;
	path: string;
	LinkIcon: string;
}

export interface IReferral {
	reference: string;
	name: string;
	date: string;
	commission: string;
	status: string;
}

export interface IPayment {
	paymentId: string;
	method: string;
	date: string;
	amount: string;
	status: string;
}

export interface IUser {
	token: string;
	data: {
		email: string;
		password: string;
		phone: string;
		referral_code: string;
		referred_by: string;
		user_name: string;
		_id: string;
	};
}

export interface IAuthData {
	email: string;
	password?: string;
	user_name: string;
	// phone: string;
	// referral_code?: string;
}
