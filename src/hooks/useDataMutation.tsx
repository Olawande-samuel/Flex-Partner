import { MutationFunction, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
	mutationKey: string[];
	mutationFn: MutationFunction<any, any>;
}

const useDataMutation = ({ mutationKey, mutationFn }: Props) => {
	const [response, setResponse] = useState<any>({});

	const mutation = useMutation({
		mutationKey,
		mutationFn,
		onSuccess: (res: any) => {
			console.log(res);
			if (res?.status >= 200 && res?.status < 300) {
				setResponse(res.data);
				if (res?.message) {
					toast.success(res.message);
				}
			}
		},
		onError: (error: unknown) => {
			console.log(error);
			if (axios.isAxiosError(error)) {
				if (error.response) {
					if (typeof error.response.data === "string") {
						toast.error("Something went wrong", {
							description:
								"Try again or if issue persists, contact the administrator",
						});
						return;
					}
					if (error.response.data?.error !== undefined) {
						toast.error(error.response?.data?.error);
						return;
					}
					if (error.response.data?.message !== undefined) {
						if (typeof error.response?.data?.message === "string") {
							toast.error(error.response?.data?.message);
							return;
						}
						Object.keys(error.response?.data?.message).map((field) => {
							toast.error(field, {
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
							toast.error("Error", {
								description: error.response?.data?.error[err][0],
							});
						});
						return;
					}
					if (typeof error.response.data?.detail === "string") {
						toast.error(error.response.data?.detail);
						return;
					}
				} else if (error.message) {
					toast.error(error.message);
				} else {
					toast.error("Something went wrong");
				}
			} else {
				console.log(error);
			}
		},
	});
	return { isPending: mutation.isPending, mutate: mutation.mutate, response };
};
export default useDataMutation;
