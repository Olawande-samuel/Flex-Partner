import { sidebarList } from "@/data";
import logo from "@/assets/icons/Logo.svg";
import SidebarItem from "./SidebarItem";
import SignOut from "./SignOut";
// import SignOut from "./SignOut";

const Sidebar = () => {
	return (
		<div className="flex h-full flex-col border-r border-accentGray bg-white">
			<section className="mb-20 h-[110px] px-8 pt-[26.5px]">
				<img src={logo} alt="flexFlow logo" height={70} />
			</section>
			<section className=" max-h-[40vh] flex-1 overflow-y-auto">
				<ul className="space-y-2">
					{sidebarList.map((item) => (
						<SidebarItem {...item} key={item.id} />
					))}
				</ul>
			</section>
			<section className="">
				<SignOut />
			</section>
		</div>
	);
};
export default Sidebar;
