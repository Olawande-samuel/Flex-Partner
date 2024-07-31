import { CardContent, Card, CardFooter } from "../ui/card";
import Image from "@/assets/images/signup-hero.png";
const SignUpCardLarge = () => {
	return (
		<Card className="flex h-full flex-col rounded-[20px] bg-accent pb-0 text-white">
			<CardContent className="pb-0 pt-7">
				<p className="mb-3 text-lg font-bold uppercase">
					Turn Your Kindness into Cash!
				</p>
				<p>
					Help Flex Drivers & Get Rewarded Today! Join Our Community of
					Successful Referral Partners Today!
				</p>
			</CardContent>
			<CardFooter className="mt-auto justify-end pb-0 pr-0">
				<div>
					<img src={Image} alt="" />
				</div>
			</CardFooter>
		</Card>
	);
};
export default SignUpCardLarge;
