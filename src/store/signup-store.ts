import { IAuthData } from "@/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = Omit<IAuthData, "password" | "user_name">;

type Store = { state: State };

interface StoreAction {
	update: (data: { [key in keyof State]: string }) => void;
}

type StoreState = Store & StoreAction;

const useSignupStore = create<StoreState>()(
	persist(
		(set, get) => ({
			state: {
				email: "",
				// password: "",
				// user_name: "",
				// phone: "",
				// referral_code: "",
			},
			update: (data) => set(() => ({ state: { ...get().state, ...data } })),
		}),
		{ name: "register" },
	),
);

export default useSignupStore;
