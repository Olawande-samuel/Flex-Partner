import ActiveButton from "@/components/ActiveButton";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "../FormInput";
import ChangeAccountConfirm from "./ChangeAccountConfirm";

const FormSchema = z.object({
	account_name: z.string(),
	account_number: z.string(),
	bank_name: z.string(),
	iban: z.string(),
	sort_code: z.string(),
});

const ChangeAccountNumber = () => {
	const [passwordOpen, setPasswordOpen] = useState(false);

	const form = useForm<z.infer<typeof FormSchema>>({
		defaultValues: {},
		resolver: zodResolver(FormSchema),
	});

	console.log(form);

	function submit(val: z.infer<typeof FormSchema>) {
		console.log(val);
		setPasswordOpen(true);
	}
	return (
		<Dialog>
			<DialogTrigger asChild>
				<ActiveButton
					title="Change Account Number"
					className="w-fit border border-accent bg-white text-accent"
				/>
			</DialogTrigger>
			<DialogContent className="max-h-[95%] overflow-y-auto">
				<div className="mb-10 text-center">
					<h1 className="mb-3 text-2xl font-bold text-[#0F172A]">
						Account Details
					</h1>
					<p className="text-sm text-grayish">
						Enter your account details below
					</p>
				</div>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(submit)}>
						<div className="mb-10 space-y-6">
							<FormInput
								name="account_number"
								label="Account Number"
								form={form}
							/>
							<FormInput name="account_name" label="Account Name" form={form} />
							<FormInput name="bank_name" label="Bank Name" form={form} />
							<FormInput name="iban" label="IBAN" form={form} />
							<FormInput name="sort_code" label="Sort Code" form={form} />
						</div>
						<div className="space-y-5">
							<ActiveButton title="Change" type="submit" />
							<DialogClose asChild>
								<Button className="w-full bg-transparent text-accent hover:bg-transparent hover:underline">
									Close
								</Button>
							</DialogClose>
						</div>
					</form>
				</Form>
			</DialogContent>

			<ChangeAccountConfirm open={passwordOpen} setOpen={setPasswordOpen} />
		</Dialog>
	);
};
export default ChangeAccountNumber;
