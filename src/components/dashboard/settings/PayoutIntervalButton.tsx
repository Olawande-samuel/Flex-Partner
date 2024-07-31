import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Calendar } from "lucide-react";

const PayoutIntervalButton = () => {
	return (
		<Select defaultValue="week">
			<SelectTrigger Icon={Calendar} className="font-semibold text-blackish2">
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="week">Every Week</SelectItem>
				<SelectItem value="ends">Weekends only</SelectItem>
			</SelectContent>
		</Select>
	);
};
export default PayoutIntervalButton;
