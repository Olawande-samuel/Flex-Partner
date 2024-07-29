import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
	return (
		<div className="flex relative h-screen overflow-y-hidden">
			<article className="basis-64 hidden lg:block grow-0 shrink-0">
				<Sidebar />
			</article>
			{/* <MobileSidebar /> */}
			<main className="flex-1 flex flex-col overflow-y-auto py-10 px-8 lg:px-11  bg-bgLight">
				<DashboardHeader />
				<section className=" flex-1">
					<Outlet />
				</section>
			</main>
		</div>
	);
};
export default DashboardLayout;
