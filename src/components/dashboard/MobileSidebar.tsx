import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/sidebar-store";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const MobileSidebar = () => {
	const { sidebar, setSidebar } = useSidebarStore();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname) {
			setSidebar();
		}
	}, [location.pathname]);

	return (
		<article
			className={cn(
				"lg:hidden z-10 absolute inset-0",
				sidebar ? "lg:hidden flex" : "hidden",
			)}
		>
			<article className="basis-64">
				<Sidebar />
			</article>
			<div
				className="flex-1 bg-greyish opacity-20"
				onClick={() => setSidebar()}
			></div>
		</article>
	);
};
export default MobileSidebar;
