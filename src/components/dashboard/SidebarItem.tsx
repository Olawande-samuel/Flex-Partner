import { ISidebarItem } from "@/lib/types";
import { NavLink, useMatch } from "react-router-dom";

const SidebarItem = ({ name, path, LinkIcon }: ISidebarItem) => {
	const isMatch = useMatch(path);

	return (
		<>
			<NavLink
				to={path}
				className={
					isMatch
						? "text-accent py-3 block relative"
						: "text-grayish py-3 block"
				}
			>
				<li className="ps-8 mx-auto flex items-center gap-3">
					<img src={LinkIcon} alt="icon" />
					{name}
				</li>
			</NavLink>
		</>
	);
};
export default SidebarItem;
