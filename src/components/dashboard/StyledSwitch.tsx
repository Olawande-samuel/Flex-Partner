import { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
// import useDataMutation from "@/hooks/useDataMutation";
import API from "@/lib/API";
import { LoaderCircle } from "lucide-react";

interface Props {
	title?: string;
	enabled?: boolean;
}

const StyledSwitch = ({ title, enabled }: Props) => {
	const [isChecked, setIsChecked] = useState(false);

	// const REQ = new API();

	// const { mutate, isPending } = useDataMutation({
	// 	mutationFn: REQ.updateBlockServiceArea,
	// 	mutationKey: ["update block location", location_id as string],
	// });

	useEffect(() => {
		if (enabled) {
			setIsChecked(true);
		}
	}, [enabled]);

	function handleStateChange(e: boolean) {
		setIsChecked(e);
		// mutate({
		// 	payload: { location_name, location_id, enabled: e },
		// 	id,
		// });
	}

	return (
		<div className="flex items-center gap-4">
			<div className="item-center flex">
				{/* {isPending && (
					<LoaderCircle className="mr-2 h-4 w-4 animate-spin" size={12} />
				)} */}
				<Switch
					id={title}
					checked={isChecked}
					onCheckedChange={handleStateChange}
					// disabled={isPending}
				/>
			</div>
			{title && (
				<Label htmlFor={title} className="font-semibold tracking-[0.23px]">
					{title}
				</Label>
			)}
		</div>
	);
};
export default StyledSwitch;
