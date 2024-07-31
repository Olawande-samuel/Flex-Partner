// import useDataMutation from "@/hooks/useDataMutation";
// import useLocalStorage from "@/hooks/useLocalStorage";
// import API from "@/lib/API";
import useDataMutation from "@/hooks/useDataMutation";
import API from "@/lib/API";
import useUserStore from "@/store/user-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, Mail } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import ActiveButton from "../ActiveButton";
import { IconInput } from "../IconInput";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";

const formSchema = z.object({
	email: z.string().email({ message: "Invalid email address" }),
	password: z.string().trim(),
});

const LoginForm = ({ text }: { text?: string }) => {
	const REQ = new API();
	const navigate = useNavigate();
	const { setUser } = useUserStore();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const { isPending, mutate, response } = useDataMutation({
		mutationFn: REQ.login,
		mutationKey: ["login"],
	});

	useEffect(() => {
		if (response?.token) {
			setUser(response);
			navigate("/dashboard", { replace: true });
		}
	}, [response]);

	function onSubmit(values: z.infer<typeof formSchema>) {
		mutate(values);
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
						loading={isPending}
					/>
				</div>
			</form>
		</Form>
	);
};
export default LoginForm;
