import shareArrow from "@/assets/icons/share-arrow.svg";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import LinkShare from "./LinkShare";

const ReferralLink = () => {
	return (
		<Card className="flex h-full flex-col space-y-8 rounded-2xl border border-accentFaint bg-[#FCF8F6]">
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<img src={shareArrow} />
					Your Referral Link
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="mb-8">
					<Label htmlFor="referralLink" className="sr-only">
						Referral Link
					</Label>
					<div className="rounded-xl border bg-white p-4 py-5 text-grayish2">
						flexflow.tech/ref=3000
					</div>
				</div>
				<Button className="h-auto w-full rounded-xl bg-accentLight py-4 text-sm font-bold text-accent">
					Copy Referral Link
				</Button>
			</CardContent>
			<CardFooter>
				<div>
					<p className="mb-4">Share on social media</p>
					<LinkShare />
				</div>
			</CardFooter>
		</Card>
	);
};
export default ReferralLink;
