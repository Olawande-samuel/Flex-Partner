import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import testImage from "@/assets/icons/user-group.svg";
import StyledButton from "./StyledButton";
import { cn } from "@/lib/utils";

interface Props {
	reversed?: boolean;
	img: string;
	title: string;
	showButton?: boolean;
	onButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DisplayCard = ({
	reversed = false,
	img,
	title,
	showButton,
	onButtonClick,
}: Props) => {
	return (
		<Card className="rounded-2xl border border-accentGray bg-white">
			<div className={cn("flex flex-col", reversed && "flex-col-reverse")}>
				<CardHeader className="mb-8">
					<div className="flex items-center justify-between">
						<span className="text-2xl font-semibold text-blackish">3,589</span>
						<img src={img ?? testImage} />
					</div>
				</CardHeader>
				<CardContent>
					<p className="text-sm uppercase text-lightGray">{title}</p>
				</CardContent>
			</div>
			{showButton && (
				<CardFooter>
					<div className="w-full">
						<StyledButton
							onClick={onButtonClick}
							title="Withdraw"
							className="w-full"
						/>
					</div>
				</CardFooter>
			)}
		</Card>
	);
};
export default DisplayCard;
