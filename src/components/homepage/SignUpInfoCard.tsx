import { Card, CardContent } from "../ui/card";

const SignUpInfoCard = ({
	img,
	title,
	text,
}: {
	img: string;
	title: string;
	text: string;
}) => {
	return (
		<Card className="size-full rounded-[20px] bg-[#0F172A] text-white">
			<CardContent className="pt-12">
				<div>
					<div className="mb-5 flex size-16 items-center justify-center rounded-[20px] bg-accent">
						<img src={img} alt="icon" />
					</div>
					<p className="mb-3 text-lg font-bold uppercase">{title}</p>
					<p className="text-base">{text}</p>
				</div>
			</CardContent>
		</Card>
	);
};
export default SignUpInfoCard;
