import { ISidebarItem } from "@/lib/types";
import Home from "@/assets/icons/home.svg";
import MoneyBag from "@/assets/icons/money-bag.svg";
import Settings from "@/assets/icons/settings.svg";
import Help from "@/assets/icons/help.svg";

export const sidebarList: ISidebarItem[] = [
	{
		id: 1,
		name: "Dashboard",
		path: "/dashboard",
		LinkIcon: Home,
	},
	{
		id: 2,
		name: "Block Alert",
		path: "/dashboard/block-alert",
		LinkIcon: MoneyBag,
	},
	{
		id: 3,
		name: "Block Schedule",
		path: "/dashboard/block-schedule",
		LinkIcon: Settings,
	},
	{
		id: 4,
		name: "Active Blocks",
		path: "/dashboard/active-blocks",
		LinkIcon: Help,
	},
];
