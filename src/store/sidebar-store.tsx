import { create } from "zustand";

type SidebarStore = {
	sidebar: boolean;
	setSidebar: () => void;
};

export const useSidebarStore = create<SidebarStore>()((set) => ({
	sidebar: false,
	setSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
}));
