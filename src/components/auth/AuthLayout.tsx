import { Outlet } from "react-router-dom";
import HomeNavbar from "./HomeNavbar";
import Container from "../Container";

const AuthLayout = () => {
	return (
		<div className="flex min-h-screen flex-col">
			<div className="basis-1/4">
				<HomeNavbar />
			</div>
			<div className="relative grid flex-1 basis-3/4 bg-bgLight py-10">
				<Container>
					<Outlet />
				</Container>
			</div>
		</div>
	);
};
export default AuthLayout;
