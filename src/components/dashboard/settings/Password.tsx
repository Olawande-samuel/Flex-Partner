import { useForm } from "react-hook-form";
import FormInput from "../FormInput";
import ActiveButton from "@/components/ActiveButton";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { CircleHelp } from "lucide-react";

const formSchema = z.object({
	old_password: z.string(),
	new_password: z.string(),
	confirm_password: z.string(),
});

const Password = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		defaultValues: {
			old_password: "",
			new_password: "",
			confirm_password: "",
		},
		resolver: zodResolver(formSchema),
	});

	function submit(val: z.infer<typeof formSchema>) {
		console.log(val);
	}
	return (
		<section className="py-14">
			<div className="max-w-[700px]">
				<p className="mb-9 font-bold text-blackish2">Change Password</p>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(submit)}>
						<div className="space-y-6">
							<FormInput
								label="Old Password"
								placeholder="old password"
								name="old_password"
								form={form}
							/>
							<div>
								<FormInput
									label="New Password"
									placeholder="new password"
									name="new_password"
									form={form}
								/>
								<p className="mt-3 flex items-center gap-2 text-sm text-grayish2">
									<CircleHelp />
									Your password must be different from the previously used
									passwords.
								</p>
							</div>
							<FormInput
								label="Confirm Password"
								placeholder="confirm password"
								name="confirm_password"
								form={form}
							/>
						</div>
						<div className="mt-10">
							<ActiveButton title="Save" type="submit" />
						</div>
					</form>
				</Form>
			</div>
		</section>
	);
};
export default Password;
