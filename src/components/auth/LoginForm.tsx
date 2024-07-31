// import useDataMutation from "@/hooks/useDataMutation";
// import useLocalStorage from "@/hooks/useLocalStorage";
// import API from "@/lib/API";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail } from "lucide-react";
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
import useUserStore from "@/store/user-store";
import ActiveButton from "../ActiveButton";

const formSchema = z.object({
	email: z.string().email({ message: "Invalid email address" }),
	password: z.string().trim(),
});

const LoginForm = ({ text }: { text?: string }) => {
	// const REQ = new API();
	// const { removeItem } = useLocalStorage();
	const navigate = useNavigate();
	const { setUser } = useUserStore();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	// const { isPending, mutate, response } = useDataMutation({
	// 	mutationFn: REQ.login,
	// 	mutationKey: ["login"],
	// });

	// useEffect(() => {
	// 	if (response?.token) {
	// 		if (response?.status?.email_verification) {
	// 			removeItem("register");
	// 			setUser(response);
	// 			toast.success("Login successfully");

	// 			if (response?.status?.amazon_flex === false) {
	// 				navigate("/dashboard/block-alert", { replace: true });
	// 				return;
	// 			}
	// 			navigate("/dashboard", { replace: true });
	// 			return;
	// 		}
	// 		toast.error("Complete your email verification to login");
	// 	}

	// }, [response]);

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
		// mutate(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<FormField
					name="email"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email address</FormLabel>
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
									placeholder="Password"
									className="rounded-2xl py-6"
								/>
							</FormControl>
							<Link
								to="/reset-password"
								className="mt-2 block text-xs underline underline-offset-2 hover:text-accent"
							>
								Forgot password?
							</Link>
						</FormItem>
					)}
				/>
				<div className="pt-2">
					<ActiveButton
						type="submit"
						title={text ? text : "Login"}
						className="w-full rounded-xl"
						// loading={isPending}
					/>
				</div>
			</form>
		</Form>
	);
};
export default LoginForm;
