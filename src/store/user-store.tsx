import { IUser } from "@/lib/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type userStore = {
	setUser: (value: IUser) => void;
	resetUser: () => void;
	user: IUser;
};

const defaultUser = {
	token: "",
	data: {
		email: "",
		password: "",
		phone: "",
		referral_code: "",
		referred_by: "",
		user_name: "",
		_id: "",
	},
};
const useUserStore = create<userStore>()(
	devtools(
		persist(
			(set) => ({
				user: defaultUser,
				setUser: (val) => set({ user: val }),
				resetUser: () => set({ user: defaultUser }),
			}),
			{ name: "user" },
		),
	),
);

export default useUserStore;
