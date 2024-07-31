// import useDataMutation from "@/hooks/useDataMutation";
// import API from "@/lib/API";
import useSignupStepsStore from "@/store/signup-steps-store";
import useSignupStore from "@/store/signup-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Ticket, User } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { z } from "zod";
import { IconInput } from "../IconInput";
import { PhoneInput } from "../PhoneInput";
import { Checkbox } from "../ui/checkbox";
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
import useLocalStorage from "@/hooks/useLocalStorage";
import useDataMutation from "@/hooks/useDataMutation";
import API from "@/lib/API";
// import useLocalStorage from "@/hooks/useLocalStorage";

const formSchema = z.object({
	user_name: z
		.string()
		.min(3, { message: "Username should be a minimum length of 3 characters" })
		.trim(),
	email: z.string().email({ message: "Invalid email address" }).trim(),
	phone: z
		.string()
		.trim()
		.refine((val) => isValidPhoneNumber(val), {
			message: "Invalid phone number",
		}),
	terms: z.boolean(),
	referral_code: z.string().optional(),
});

const SignUpForm = () => {
	const REQ = new API();
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const { updateStep } = useSignupStepsStore();
	const { update, state } = useSignupStore();
	const { getItem } = useLocalStorage();

	const isEmailAlreadyVerified = getItem("verifiedEmail");
	const referral_code = searchParams.get("ref");

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			phone: "",
			referral_code: "",
		},
	});

	const { isPending, response, mutate } = useDataMutation({
		mutationFn: REQ.tempsignup,
		mutationKey: ["signup"],
	});
	useEffect(() => {
		if (isEmailAlreadyVerified) {
			form.reset(state);
		}
	}, [state, isEmailAlreadyVerified]);

	useEffect(() => {
		if (referral_code) {
			form.reset({ referral_code });
		}
	}, [referral_code]);

	useEffect(() => {
		if (response?.success) {
			toast.success("Success!");
			if (isEmailAlreadyVerified === form.getValues().email) {
				updateStep(2);
				navigate("/create-password", { replace: true });
				return;
			}
			updateStep();
			navigate("/verify-email", { replace: true });
		}
	}, [response?.success]);

	function onSubmit(values: z.infer<typeof formSchema>) {
		update(values);
		const payload = {
			email: values.email,
			phone: values.phone,
			user_name: values.user_name,
		};
		console.log(payload);
		mutate(payload);
	}

	function openTerms() {
		window.open(
			window.location.origin + "/terms-and-conditions",
			"target=_blank",
		);
	}
	function openPrivacy() {
		window.open(window.location.origin + "/privacy-policy", "target=_blank");
	}
	return (
		<Form {...form}>
			<form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					name="user_name"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-base text-black">Username</FormLabel>
							<FormControl>
								<IconInput
									{...field}
									showIcon={true}
									Icon={User}
									className="rounded-xl py-6"
									placeholder="Username"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="email"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-base text-black">
								Email address
							</FormLabel>
							<FormControl>
								<IconInput
									{...field}
									showIcon={true}
									Icon={Mail}
									className="rounded-xl py-6"
									placeholder="Email Address"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="phone"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-base text-black">
								Phone number
							</FormLabel>
							<FormControl>
								<PhoneInput {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="referral_code"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-base text-black">
								Referral Code
							</FormLabel>
							<FormControl>
								<IconInput
									{...field}
									disabled={!!referral_code}
									showIcon={true}
									Icon={Ticket}
									placeholder="Referral code"
									className="rounded-2xl py-6"
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<div className="pt-2">
					<FormField
						control={form.control}
						name="terms"
						render={({ field }) => (
							<FormItem className="flex items-start space-x-3 space-y-0">
								<FormControl>
									<Checkbox
										checked={field.value}
										onCheckedChange={field.onChange}
									/>
								</FormControl>
								<FormLabel className="text-xs leading-4  text-grayish">
									By creating an account means you agree to the{" "}
									<Link to="#" onClick={() => openTerms()}>
										<b className="text-black">Terms & Conditions</b>
									</Link>{" "}
									and our{" "}
									<Link
										to="#"
										className="font-bold text-black"
										onClick={() => openPrivacy()}
									>
										Privacy Policy
									</Link>
								</FormLabel>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className="pt-2">
					<ActiveButton
						type="submit"
						title="Sign Up"
						className="w-full rounded-xl"
						// loading={isPending}
					/>
					<p className="mt-3 text-center text-xs text-grayish">
						By signing up, you have opted in to receive SMS and service may
						apply.
					</p>
				</div>
			</form>
		</Form>
	);
};
export default SignUpForm;
