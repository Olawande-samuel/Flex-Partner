import { cn, generateStatus } from "@/lib/utils";
import { Badge } from "../ui/badge";

interface Props {
	status: string;
	title: string;
	color?: string;
}
const StatusBadge = ({ status, title, color }: Props) => {
	return (
		<Badge
			className={cn(
				`${color} font-sm font-semibold rounded-md py-1 break-normal capitalize`,
				status && generateStatus(status),
			)}
		>
			{title}
		</Badge>
	);
};
export default StatusBadge;
