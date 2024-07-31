import { useForm } from "react-hook-form";
import FormInput from "../FormInput";
import ActiveButton from "@/components/ActiveButton";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { CircleHelp } from "lucide-react";
import API from "@/lib/API";
import useDataMutation from "@/hooks/useDataMutation";
import { toast } from "sonner";

const formSchema = z
	.object({
		old_password: z.string(),
		new_password: z.string(),
		confirm_password: z.string(),
	})
	.refine((data) => data.new_password === data.confirm_password, {
		message: "Passwords don't match",
		path: ["confirm_password"],
	});

const Password = () => {
	const REQ = new API();

	const form = useForm<z.infer<typeof formSchema>>({
		defaultValues: {
			old_password: "",
			new_password: "",
			confirm_password: "",
		},
		resolver: zodResolver(formSchema),
	});

	const { mutate, isPending } = useDataMutation({
		mutationFn: REQ.changePassword,
		mutationKey: ["change account password"],
	});

	function submit(val: z.infer<typeof formSchema>) {
		mutate(
			{ old_password: val.old_password, new_password: val.new_password },
			{
				onSuccess: (res) => {
					if (res?.status === 200) {
						toast.success(res.data.status);
						form.reset();
					}
				},
			},
		);
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
								type="password"
							/>
							<div>
								<FormInput
									label="New Password"
									placeholder="new password"
									name="new_password"
									form={form}
									type="password"
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
								type="password"
							/>
						</div>
						<div className="mt-10">
							<ActiveButton title="Save" type="submit" loading={isPending} />
						</div>
					</form>
				</Form>
			</div>
		</section>
	);
};
export default Password;
