import { sidebarList } from "@/data";
import logo from "@/assets/icons/Logo.svg";
import SidebarItem from "./SidebarItem";
// import SignOut from "./SignOut";

const Sidebar = () => {
	return (
		<div className="bg-white h-full flex flex-col border-r border-[#E6E6E6]">
			<section className="h-[110px] pt-[26.5px] px-8 mb-20">
				<img src={logo} alt="flexFlow logo" height={70} />
			</section>
			<section className=" flex-1 max-h-[75vh] overflow-y-auto">
				<ul className="space-y-2">
					{sidebarList.map((item) => (
						<SidebarItem {...item} key={item.id} />
					))}
				</ul>
			</section>
			<section className="justify-self-end	">{/* <SignOut /> */}</section>
		</div>
	);
};
export default Sidebar;
