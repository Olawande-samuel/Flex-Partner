import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import FormInput from "../FormInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ActiveButton from "@/components/ActiveButton";
import React from "react";
import { z } from "zod";
const formSchema = z.object({
	password: z.string(),
});

const ChangeAccountConfirm = ({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const form = useForm<z.infer<typeof formSchema>>({
		defaultValues: {
			password: "",
		},
		resolver: zodResolver(formSchema),
	});
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent>
				<div className="mb-10 text-center">
					<h1 className="mb-3 text-2xl font-bold text-[#0F172A]">
						Enter Password
					</h1>
					<p className="text-sm text-grayish">
						Enter your password to successfully change your account number
					</p>
				</div>
				<Form {...form}>
					<form className="space-y-10">
						<FormInput
							type="password"
							name="password"
							form={form}
							label="Enter password"
							placeholder="Enter password"
						/>
						<ActiveButton title="Change" />
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};
export default ChangeAccountConfirm;
