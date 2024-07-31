import useDataMutation from "@/hooks/useDataMutation";
import API from "@/lib/API";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { IconInput } from "../IconInput";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { toast } from "sonner";
import ActiveButton from "../ActiveButton";

const formSchema = z.object({
	email: z.string().email({ message: "Invalid email address" }),
});

const ResetPassword = () => {
	const REQ = new API();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	});
	const { isPending, mutate, response } = useDataMutation({
		mutationFn: REQ.resetPassword,
		mutationKey: ["reset password"],
	});

	useEffect(() => {
		if (response?.message) {
			toast.info(response.message);
		}
	}, [response]);

	function onSubmit(values: z.infer<typeof formSchema>) {
		const payload = { email: values.email };
		mutate(payload);
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					name="email"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email Address</FormLabel>
							<FormControl>
								<IconInput
									{...field}
									Icon={Mail}
									showIcon
									className="rounded-2xl py-6"
									placeholder="Email Address"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="pt-2">
					<ActiveButton
						type="submit"
						title="Reset"
						className="w-full rounded-xl"
						loading={isPending}
					/>
				</div>
			</form>
		</Form>
	);
};
export default ResetPassword;
