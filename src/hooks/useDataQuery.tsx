import { QueryFunction, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "sonner";

interface Props {
	queryFn: QueryFunction;
	queryKey: string[];
	enabled?: boolean;
	staleTime?: number;
}
const useDataQuery = ({
	queryFn,
	queryKey,
	staleTime = 3000,
	enabled = true,
}: Props): {
	data: any;
	isError: boolean;
	isLoading: boolean;
	isFetching: boolean;
} => {
	const { data, isError, error, isLoading, isFetching } = useQuery({
		queryKey,
		queryFn,
		enabled,
		staleTime,
	});

	useEffect(() => {
		if (axios.isAxiosError(error)) {
			if (error.response) {
				if (typeof error.response.data === "string") {
					toast.error("Something went wrong", {
						description:
							"Try again or if issue persists, contact the administrator",
					});
					return;
				}
				if (error.response.data?.message !== undefined) {
					if (typeof error.response?.data?.message === "string") {
						toast.error(error.response?.data?.message);
						return;
					}
					Object.keys(error.response?.data?.message).map((field) => {
						toast(field, {
							description: error.response?.data?.message[field][0],
						});
					});
				}
				if (error.response.data?.error !== undefined) {
					if (typeof error.response?.data?.error === "string") {
						toast.error(error.response?.data?.error);
						return;
					}
					const errorList = Object.keys(error.response?.data?.error);
					errorList.forEach((err: any) => {
						toast(error.message, {
							description: error.response?.data?.error[err][0],
						});
					});
					return;
				}
				if (typeof error.response.data?.detail === "string") {
					toast.error(error.response.data?.detail);
					return;
				}
			} else {
				toast.error(error.message);
			}
		}
	}, [isError]);
	return { data, isError, isLoading, isFetching };
};
export default useDataQuery;
