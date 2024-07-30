import { Card, CardContent, CardHeader } from "../ui/card";
import testImage from "@/assets/icons/user-group.svg";

const DisplayCard = () => {
	return (
		<Card className="bg-white rounded-2xl border border-[#E6E6E6]">
			<CardHeader className="mb-8">
				<div className="flex justify-between items-center">
					<span className="text-2xl font-semibold text-blackish">3,589</span>
					<img src={testImage} />
				</div>
			</CardHeader>
			<CardContent>
				<p className="text-lightGray uppercase text-sm">TOTAL REFERRALS</p>
			</CardContent>
		</Card>
	);
};
export default DisplayCard;
