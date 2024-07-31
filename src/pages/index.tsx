import Becoming from "@/components/homepage/Becoming";
import Footer from "@/components/homepage/Footer";
import Gifting from "@/components/homepage/Gifting";
import Hero from "@/components/homepage/Hero";
import SignupInfo from "@/components/homepage/SignupInfo";
import Testimonials from "@/components/homepage/Testimonials";

const HomePage = () => {
	return (
		<div>
			<Hero />
			<Gifting />
			<Becoming />
			<SignupInfo />
			<Testimonials />
			<Footer />
		</div>
	);
};
export default HomePage;
