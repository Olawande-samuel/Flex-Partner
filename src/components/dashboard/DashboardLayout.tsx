import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
	return (
		<div className="relative flex h-screen overflow-y-hidden border border-red-900">
			<article className="hidden shrink-0 grow-0 basis-64 lg:block">
				<Sidebar />
			</article>
			{/* <MobileSidebar /> */}
			<main className="flex flex-1 flex-col overflow-y-auto bg-bgLight px-8 py-10 lg:px-11">
				<DashboardHeader />
				<section className=" flex-1">
					<Outlet />
				</section>
			</main>
		</div>
	);
};
export default DashboardLayout;
