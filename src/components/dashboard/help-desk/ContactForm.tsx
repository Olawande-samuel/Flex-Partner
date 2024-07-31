// import useDataMutation from "@/hooks/useDataMutation";
// import API from "@/lib/API";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import ActiveButton from "@/components/ActiveButton";

const formSchema = z.object({
	first_name: z.string(),
	last_name: z.string().optional(),
	email: z.string().email(),
	subject: z.string(),
	message: z.string().min(4, { message: "Message cannot be empty" }),
});

const ContactForm = () => {
	// const REQ = new API();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			first_name: "",
			last_name: "",
			email: "",
			subject: "",
			message: "",
		},
	});

	// const { mutate, isPending } = useDataMutation({
	// 	mutationFn: REQ.addContact,
	// 	mutationKey: ["create contact"],
	// });

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			console.log(values);
			// mutate(values, {
			// 	onSuccess(data) {
			// 		if (data?.data) {
			// 			toast.success(data?.data?.success);
			// 			form.reset();
			// 		}
			// 	},
			// });
		} catch (error) {
			toast.error("Error occured");
		}
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<div className="grid gap-4 xl:grid-cols-2">
					<FormField
						name="first_name"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>First Name</FormLabel>
								<FormControl>
									<Input
										className="h-12 rounded-xl placeholder:text-lightGray"
										{...field}
										placeholder="First name..."
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name="last_name"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Last Name</FormLabel>
								<FormControl>
									<Input
										className="h-12 rounded-xl placeholder:text-lightGray"
										{...field}
										placeholder="Last name..."
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					name="email"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									className="h-12 rounded-xl placeholder:text-lightGray"
									{...field}
									placeholder="Email Address"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="subject"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Subject</FormLabel>
							<FormControl>
								<Input
									className="h-12 rounded-xl placeholder:text-lightGray"
									{...field}
									placeholder="Subject"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="message"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea
									rows={6}
									className="resize-none"
									{...field}
									placeholder="Message"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="">
					<ActiveButton
						type="submit"
						title="Send Message"
						className="mt-4 h-14 w-full rounded-xl bg-accent text-lg text-white"
						// loading={isPending}
					/>
				</div>
			</form>
		</Form>
	);
};
export default ContactForm;
