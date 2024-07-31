import { Link } from "react-router-dom";
import Container from "../Container";

const Footer = () => {
	return (
		<footer className="bg-[#1B1B1B] py-8">
			<Container>
				<div className="flex flex-wrap-reverse items-center justify-center sm:justify-between gap-4 text-[#767E94]">
					<p>All Right Reserve &copy; FlexFlow INC</p>
					<div className="space-x-3">
						<Link to="/">Privacy Policy</Link>
						<span>|</span>
						<Link to="/">Terms &amp; Conditions</Link>
					</div>
				</div>
			</Container>
		</footer>
	);
};
export default Footer;
