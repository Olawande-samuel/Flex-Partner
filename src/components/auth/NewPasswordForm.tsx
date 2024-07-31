import useDataMutation from "@/hooks/useDataMutation";
import API from "@/lib/API";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
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

const formSchema = z
	.object({
		new_password: z
			.string()
			.trim()
			.regex(/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/, {
				message: "Password must be a minimum of 8 alpha numeric characters.",
			}),
		confirm_password: z.string(),
	})
	.refine((data) => data.new_password === data.confirm_password, {
		message: "Passwords don't match",
		path: ["confirm_password"],
	});

const NewPasswordForm = () => {
	const [searchParams] = useSearchParams();
	const token = searchParams.get("token");
	const uidb64 = searchParams.get("uidb64");

	const REQ = new API();
	const navigate = useNavigate();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			new_password: "",
		},
	});
	const { isPending, mutate, response } = useDataMutation({
		mutationFn: REQ.confirmPasswordReset,
		mutationKey: ["confirm password reset"],
	});

	useEffect(() => {
		if (response?.message) {
			toast.success(response.message);
			navigate("/login", { replace: true });
		}
	}, [response]);

	function onSubmit(values: z.infer<typeof formSchema>) {
		const payload = { token, uidb64, new_password: values.new_password };
		mutate(payload);
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormMessage />
				<FormField
					name="new_password"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>New Password</FormLabel>
							<FormControl>
								<IconInput
									{...field}
									type="password"
									Icon={Lock}
									showIcon
									className="rounded-2xl py-6"
									placeholder="Enter new password"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="confirm_password"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm Password</FormLabel>
							<FormControl>
								<IconInput
									{...field}
									type="password"
									Icon={Lock}
									showIcon
									placeholder="Confirm Password"
									className="rounded-2xl py-6"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="pt-2">
					<ActiveButton
						type="submit"
						title="Submit"
						className="w-full rounded-xl"
						loading={isPending}
					/>
				</div>
			</form>
		</Form>
	);
};
export default NewPasswordForm;
