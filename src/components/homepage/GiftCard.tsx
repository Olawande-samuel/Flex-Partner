import { CircleArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "../ui/card";
import { cn } from "@/lib/utils";

const GiftCard = ({
	img,
	title,
	subtext,
	isSecond,
}: {
	img: string;
	title: string;
	subtext: string;
	isSecond?: boolean;
}) => {
	return (
		<Card
			className={cn(
				"w-full rounded-[28px] border-none bg-[#E4F1FF] pb-0",
				isSecond && "bg-[#E4E7FF]",
			)}
		>
			<CardContent className="mx-auto max-w-[500px] pt-14 text-center">
				<h3 className="mb-2 text-3xl font-semibold">{title}</h3>
				<p className="mb-6 text-lg text-[#2A496B]">{subtext}</p>
				<div className="flex justify-center">
					<Link
						to="/"
						className="flex items-center gap-5 text-2xl font-semibold text-[#2A496B]"
					>
						Get Started
						<CircleArrowRight color="#FFF" fill="#2A496B" />
					</Link>
				</div>
			</CardContent>
			<CardFooter className="flex items-end justify-center pb-0">
				<img
					src={img}
					className="max-w-full "
					alt="happy-commercial-motorcycle-driver-holding-smart-phone-clenching-fist-showing-victory-gesture-g.png"
				/>
			</CardFooter>
		</Card>
	);
};
export default GiftCard;
