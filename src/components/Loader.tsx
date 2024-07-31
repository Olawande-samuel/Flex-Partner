import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

const Loader = ({
	className,
	size = 12,
}: {
	className?: string;
	size?: number;
}) => {
	return (
		<span className="flex items-center">
			<LoaderCircle
				className={cn("mr-2 h-4 w-4 animate-spin", className)}
				size={size}
				color="#FF6600"
			/>
		</span>
	);
};
export default Loader;
