import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export function generateStatus(status: string) {
	switch (status?.toLowerCase()) {
		case "subscribed":
			return "text-accentGreen bg-lightAccentGreen";
		// case "not-subscribed":
		// 	return "text-accentBlue bg-lightAccentBlue";
		// case "completed":
		// 	return "text-accentBlue bg-lightAccentBlue";
		// case "dislike":
		// 	return "text-accentPink bg-lightAccentPink";
		// case "rejected":
		// 	return "text-accentPink bg-lightAccentPink";
		// case "active":
		// 	return "text-accentGreen bg-lightAccentGreen";
		// case "inactive":
		// 	return "text-accentPink bg-lightAccentPink";
		case "successful":
			return "text-accentGreen bg-lightAccentGreen";
		case "not-subscribed":
			return "text-accentPink bg-lightAccentPink";
		case "failed":
			return "text-accentPink bg-lightAccentPink";
		default:
			return "";
	}
}
