import useDataMutation from "@/hooks/useDataMutation";
import API from "@/lib/API";
import { useEffect, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import useSignupStore from "@/store/signup-store";
import ActiveButton from "../ActiveButton";
import ResendEmail from "./ResendEmail";
import Loader from "../Loader";

const FormSchema = z.object({
	pin: z.string().min(6, {
		message: "Your one-time password must be 6 characters.",
	}),
});

const VerifyEmail = () => {
	const [hasRan, setHasRan] = useState(false);
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const { removeItem, setItem } = useLocalStorage();
	const { state } = useSignupStore();

	const REQ = new API();
	const token = searchParams.get("token");
	const uidb64 = searchParams.get("uidb64");

	const { mutate, response, isPending } = useDataMutation({
		mutationFn: REQ.verifyEmail,
		mutationKey: ["verify email"],
	});

	useEffect(() => {
		if (response?.message) {
			toast.success("Verified successfully");
			setItem("verifiedEmail", state.email);
			removeItem("prevTries");
			navigate("/create-password", { replace: true });
		}
	}, [response?.message]);

	useEffect(() => {
		if (token && uidb64 && hasRan === false) {
			setHasRan(true);
			mutate({ token, uidb64 });
		}
	}, [token]);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			pin: "",
		},
	});

	function submit(val: z.infer<typeof FormSchema>) {
		const payload = { email: state.email, code: val.pin };
		mutate(payload, {
			onError: () => form.reset({ pin: "" }),
		});
	}
	return (
		<section className="grid place-items-center">
			{token && uidb64 ? (
				<Loader size={32} className="text-accent" />
			) : (
				<section>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(submit)}>
							<FormField
								control={form.control}
								name="pin"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="sr-only">One-Time Password</FormLabel>
										<FormControl>
											<InputOTP
												maxLength={6}
												{...field}
												containerClassName="justify-center"
											>
												<InputOTPGroup className="gap-2">
													<InputOTPSlot
														index={0}
														className=" size-14 rounded-md border border-[#C2C2C2]"
													/>
													<InputOTPSlot
														index={1}
														className=" size-14 rounded-md border border-[#C2C2C2]"
													/>
													<InputOTPSlot
														index={2}
														className=" size-14 rounded-md border border-[#C2C2C2]"
													/>
													<InputOTPSlot
														index={3}
														className=" size-14 rounded-md border border-[#C2C2C2]"
													/>
													<InputOTPSlot
														index={4}
														className=" size-14 rounded-md border border-[#C2C2C2]"
													/>
													<InputOTPSlot
														index={5}
														className=" size-14 rounded-md border border-[#C2C2C2]"
													/>
												</InputOTPGroup>
											</InputOTP>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className="mt-6 flex items-center justify-between bg-accentLight px-3 py-2 text-sm">
								<span className="text-grayish">Didn't get the code?</span>
								<ResendEmail />
							</div>
							<div className="mt-12 flex w-full">
								<ActiveButton
									type="submit"
									title="Verify"
									// wrapperClassName="w-full"
									className="w-full rounded-lg"
									// loading={isPending}
								/>
							</div>
						</form>
					</Form>
				</section>
			)}
		</section>
	);
};
export default VerifyEmail;
