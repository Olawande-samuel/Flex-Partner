import { IAuthData } from "@/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = { state: IAuthData };

interface StoreAction {
	update: (data: { [key in keyof IAuthData]: string }) => void;
}

type StoreState = Store & StoreAction;

const useSignupStore = create<StoreState>()(
	persist(
		(set, get) => ({
			state: {
				email: "",
				password: "",
				user_name: "",
				phone: "",
				referral_code: "",
			},
			update: (data) => set(() => ({ state: { ...get().state, ...data } })),
		}),
		{ name: "register" },
	),
);

export default useSignupStore;
