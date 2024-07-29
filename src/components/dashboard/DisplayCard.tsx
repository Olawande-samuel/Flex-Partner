import { Card, CardContent, CardHeader } from "../ui/card";
import testImage from "@/assets/icons/user-group.svg";

const DisplayCard = () => {
	return (
		<Card className="bg-white rounded-2xl border border-[#E6E6E6]">
			<CardHeader>
				<div className="flex justify-between items-center">
					<span className="text-2xl font-semibold">3,589</span>
					<img src={testImage} />
				</div>
			</CardHeader>
			<CardContent>
				<p>TOTAL REFERRALS</p>
			</CardContent>
		</Card>
	);
};
export default DisplayCard;
