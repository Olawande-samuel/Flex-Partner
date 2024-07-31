import { useSidebarStore } from "@/store/sidebar-store";
import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom";

const DashboardHeader = () => {
	const { pathname } = useLocation();
	const { setSidebar } = useSidebarStore();
	return (
		<div className="mb-8 flex items-center gap-2">
			<Menu onClick={() => setSidebar()} className="block lg:hidden" />
			<h1 className=" text-lg uppercase text-grayish ">
				{pathname.split("/")[2]
					? pathname.split("/")[2]
					: pathname.split("/")[1]}
			</h1>
		</div>
	);
};
export default DashboardHeader;
