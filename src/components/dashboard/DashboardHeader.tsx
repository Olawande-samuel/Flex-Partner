import { useLocation } from "react-router-dom";

const DashboardHeader = () => {
	const { pathname } = useLocation();
	return (
		<h1 className="text-lg text-grayish mb-8 uppercase ">
			{pathname.split("/")[1]}
		</h1>
	);
};
export default DashboardHeader;
