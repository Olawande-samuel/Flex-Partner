import Container from "../Container";
import GiftCard from "./GiftCard";
import SectionHeader from "./SectionHeader";
import unlimited from "@/assets/images/unlimited.png";
import monthly from "@/assets/images/monthly.png";

const Gifting = () => {
	return (
		<section className="mt-24">
			<Container>
				<div>
					<SectionHeader
						title="Give the Gift of Success"
						subtext="Help them achieve their Flexing goals and reduce stress. It's Easy & Rewarding: Just share your referral link and watch them (and you!) win!"
					/>
					<div className="flex flex-col gap-9 md:flex-row">
						<GiftCard
							img={unlimited}
							title="Unlimited Referrals, Unlimited Cash"
							subtext="The more Flex drivers you help, the more you earn! Imagine a $1,000+ bonus!"
						/>
						<GiftCard
							isSecond
							img={monthly}
							title="$20 Every Month 
(For 3 Months) Per Referral"
							subtext="Just for introducing FlexFlow to active Flex drivers! Easy money for helping a friend!"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};
export default Gifting;
