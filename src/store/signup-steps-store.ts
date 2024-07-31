import { create } from "zustand";

interface Store {
	step: number;
}

interface StoreContoller {
	updateStep: (val?: number) => void;
}

type StoreState = Store & StoreContoller;

const useSignupStepsStore = create<StoreState>()((set) => ({
	step: 0,
	updateStep: (val) => set((state) => ({ step: val ? val : state.step + 1 })),
}));

export default useSignupStepsStore;
