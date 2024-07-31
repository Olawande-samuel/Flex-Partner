import { Link, useLocation } from "react-router-dom";
import Container from "../Container";
import { Button } from "../ui/button";
import Logo from "@/assets/icons/Logo.svg";

const HomeNavbar = () => {
	const location = useLocation();
	const isLoginPage = location.pathname === "/login" ? true : false;
	const hideLink =
		location.pathname !== "/login" && location.pathname !== "/sign-up";
	return (
		<div className="bg-white py-6">
			<Container>
				<div className="flex justify-between">
					<Link to="/">
						<img src={Logo} alt="Flex Grabber logo" height={70} />
					</Link>
					{!hideLink && (
						<div className="flex items-center gap-3">
							<p className="hidden text-grayish md:block">
								{isLoginPage
									? "Don’t have an account?"
									: " Already have an account?"}
							</p>
							<Button
								asChild
								className="rounded-xl  bg-accentLight text-base text-accent"
							>
								{isLoginPage ? (
									<Link to="/sign-up">Sign Up</Link>
								) : (
									<Link to="/login">Login</Link>
								)}
							</Button>
						</div>
					)}
				</div>
			</Container>
		</div>
	);
};
export default HomeNavbar;
