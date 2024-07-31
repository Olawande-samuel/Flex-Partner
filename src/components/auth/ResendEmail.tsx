// import useDataMutation from "@/hooks/useDataMutation";
// import useLocalStorage from "@/hooks/useLocalStorage";
// import API from "@/lib/API";
import useSignupStore from "@/store/signup-store";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import useLocalStorage from "@/hooks/useLocalStorage";
import ResetTimer from "./ResetTimer";
import API from "@/lib/API";
import useDataMutation from "@/hooks/useDataMutation";

const ResendEmail = () => {
	const [isDone, setIsDone] = useState(true);
	const [initialTargetTime, setInitialTargetTime] = useState(0);
	const [showCount, setShowCount] = useState(false);
	const { setItem, getItem } = useLocalStorage();
	const { state } = useSignupStore();

	const REQ = new API();

	const { mutate, response } = useDataMutation({
		mutationFn: REQ.resendEmail,
		mutationKey: ["resend email verification"],
	});

	useEffect(() => {
		if (response?.success) {
			toast.success(response.success);
		}
	}, [response]);

	const savedTargetTime = getItem("countdownTargetTime");
	useEffect(() => {
		if (savedTargetTime) {
			if (parseInt(savedTargetTime) > 0) {
				setIsDone(false);
			} else {
				setIsDone(true);
			}
			setInitialTargetTime(parseInt(savedTargetTime));
		}
	}, [savedTargetTime]);

	useEffect(() => {
		if (isDone) {
			setShowCount(false);
		}
	}, [isDone]);

	function onClick(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		const prevTries = getItem("prevTries");
		if (state?.email) {
			mutate({ email: state.email });
			if (prevTries) {
				const parsed = JSON.parse(prevTries);
				setItem("prevTries", JSON.stringify(+parsed + 2));
				setInitialTargetTime(new Date().getTime() + 10 * parsed * 1000);
				setShowCount(true);
			} else {
				setItem("prevTries", JSON.stringify(1));
				setInitialTargetTime(new Date().getTime() + 10 * 1000);
				setShowCount(true);
			}
		} else {
			toast.error("Could not find email address");
		}
	}
	return (
		<div>
			{showCount ? (
				<ResetTimer
					targetTime={initialTargetTime}
					setIsDone={setIsDone}
					isDone={isDone}
				/>
			) : (
				<Button
					type="button"
					className="h-6 py-1 text-accent bg-transparent"
					onClick={onClick}
				>
					Resend Email
				</Button>
			)}
		</div>
	);
};
export default ResendEmail;
