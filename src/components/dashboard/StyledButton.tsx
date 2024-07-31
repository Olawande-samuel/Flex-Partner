import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const StyledButton = ({
	className,
	title,
	type,
	onClick,
}: {
	className?: string;
	title: string;
	type?: "button" | "submit" | "reset";
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
	return (
		<Button
			onClick={onClick}
			type={type ?? "button"}
			className={cn(
				"h-auto w-full rounded-xl bg-accentLight py-4 text-sm font-bold text-accent",
				className,
			)}
		>
			{title}
		</Button>
	);
};
export default StyledButton;
