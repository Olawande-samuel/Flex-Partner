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
						? "relative block py-3 text-accent"
						: "block py-3 text-grayish"
				}
			>
				<li className="mx-auto flex items-center gap-3 ps-8">
					<img src={LinkIcon} alt="icon" />
					{name}
				</li>
			</NavLink>
		</>
	);
};
export default SidebarItem;
