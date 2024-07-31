import Container from "../Container";
import SectionHeader from "./SectionHeader";
import SignUpCardLarge from "./SignUpCardLarge";
import SignUpInfoCard from "./SignUpInfoCard";
import join from "@/assets/icons/join.svg";
import link from "@/assets/icons/link.svg";
import user from "@/assets/icons/user.svg";
import moneyBag from "@/assets/icons/home-money-bag.svg";

const SignupInfo = () => {
	return (
		<div className="mb-24">
			<Container>
				<SectionHeader title="Sign Up Now & Be a FlexFlow Hero!" />
				<section className="lg:px-10">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
						<div className="col-span-1">
							<SignUpInfoCard
								img={user}
								title="Sign Up in Minutes"
								text="It's free and takes no time!"
							/>
						</div>
						<div className="col-span-1">
							<SignUpInfoCard
								img={moneyBag}
								title="Track Your Earnings & Celebrate"
								text="Watch your impact and the cash flow in!
"
							/>
						</div>
						<div className="row-span-2 sm:col-span-2 lg:col-start-2 lg:row-start-1">
							<SignUpCardLarge />
						</div>
						<div className="col-span-1 lg:row-start-2">
							<SignUpInfoCard
								img={link}
								title="Share Your Unique Link"
								text="Tell your Flex driver friends, family, or anyone you know!"
							/>
						</div>
						<div className="col-span-1">
							<SignUpInfoCard
								img={join}
								title=""
								text="Join Our Community of Successful Referral Partners Today!"
							/>
						</div>
					</div>
				</section>
			</Container>
		</div>
	);
};
export default SignupInfo;
