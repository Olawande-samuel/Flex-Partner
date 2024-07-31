import useDataMutation from "@/hooks/useDataMutation";
import API from "@/lib/API";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
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
import useSignupStore from "@/store/signup-store";
import useLocalStorage from "@/hooks/useLocalStorage";
import useUserStore from "@/store/user-store";
import ActiveButton from "../ActiveButton";
// import mixpanel from "mixpanel-browser";

// function trackUserSignup(userId: string, email: string, username: string) {
// 	mixpanel.track("Signup", {
// 		email: email,
// 		signup_date: new Date().toISOString(),
// 	});

// 	mixpanel.identify(userId);

// 	mixpanel.people.set({
// 		$email: email,
// 		$name: username,
// 		$signup_date: new Date().toISOString(),
// 	});
// }
const formSchema = z
	.object({
		password: z
			.string()
			.trim()
			.regex(/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/, {
				message: "Password must be a minimum of 8 alpha numeric characters.",
			})
			.trim(),
		confirm_password: z.string().trim(),
	})
	.refine((data) => data.password === data.confirm_password, {
		message: "Passwords don't match",
		path: ["confirm_password"],
	});

const CreatePasswordForm = () => {
	const REQ = new API();
	const navigate = useNavigate();
	const { state } = useSignupStore();
	const { removeItem } = useLocalStorage();
	const { setUser } = useUserStore();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	const { isPending, mutate, response } = useDataMutation({
		mutationFn: REQ.signup,
		mutationKey: ["signup"],
	});

	useEffect(() => {
		if (response?.user?.email) {
			setUser(response);
			// trackUserSignup(
			// 	response?.user._id,
			// 	response?.user?.email,
			// 	response?.user?.user_name,
			// );
			removeItem("verifiedEmail");
			removeItem("register");
			toast.success("Account created successfully");
			navigate("/dashboard", { replace: true });
		}
	}, [response?.user]);

	function onSubmit(values: z.infer<typeof formSchema>) {
		const payload = state;
		mutate({ ...payload, password: values.password });
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormMessage />
				<FormField
					name="password"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
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
						title="Create Account"
						className="w-full rounded-xl"
						loading={isPending}
					/>
					<Link
						to="/sign-up"
						className="block text-center text-sm underline underline-offset-2 hover:text-accent "
					>
						Back to Sign up
					</Link>
				</div>
			</form>
		</Form>
	);
};
export default CreatePasswordForm;
