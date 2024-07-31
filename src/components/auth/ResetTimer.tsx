import useLocalStorage from "@/hooks/useLocalStorage";
import React, { useState, useEffect } from "react";

interface Props {
	targetTime: number;
	setIsDone: React.Dispatch<React.SetStateAction<boolean>>;
	isDone: boolean;
}
const calculateTimeLeft = (targetTime: number) => {
	const difference = targetTime - new Date().getTime();
	if (difference <= 0) {
		localStorage.setItem("countdownTargetTime", JSON.stringify(0));
		return null;
	}

	return {
		hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
		minutes: Math.floor((difference / 1000 / 60) % 60),
		seconds: Math.floor((difference / 1000) % 60),
	};
};
const ResetTimer = ({ targetTime, setIsDone, isDone }: Props) => {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetTime));
	const { getItem } = useLocalStorage();
	const currentTimeValue = getItem("countdownTargetTime");

	useEffect(() => {
		localStorage.setItem("countdownTargetTime", JSON.stringify(targetTime));

		const intervalId = setInterval(() => {
			setIsDone(false);
			setTimeLeft(calculateTimeLeft(targetTime));
		}, 1000);

		return () => clearInterval(intervalId);
	}, [targetTime]);

	useEffect(() => {
		if (currentTimeValue === 0 && isDone === false) {
			setIsDone(true);
		}
	}, [currentTimeValue]);

	return (
		<p className="text-sm">
			{timeLeft && `${timeLeft.minutes}m ${timeLeft.seconds}s`}
		</p>
	);
};

export default ResetTimer;
