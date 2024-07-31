import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { RotateCw } from "lucide-react";

const ActiveButton = ({
	className,
	title,
	type,
	onClick,
	loading,
}: {
	className?: string;
	title: string;
	type?: "button" | "submit" | "reset";
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	loading?: boolean;
}) => {
	return (
		<Button
			onClick={onClick}
			type={type ?? "button"}
			className={cn(
				"h-auto w-full rounded-xl bg-accent py-4 text-sm font-bold text-white",
				className,
			)}
		>
			{loading ? (
				<span className="flex items-center">
					<RotateCw className="mr-2 size-4 animate-spin " /> {title}
				</span>
			) : (
				title
			)}
		</Button>
	);
};
export default ActiveButton;
