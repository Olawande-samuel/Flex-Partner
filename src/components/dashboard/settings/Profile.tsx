import { z } from "zod";
import FormInput from "../FormInput";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import brokenImage from "@/assets/icons/broken-img.svg";
import StyledButton from "../StyledButton";

const formSchema = z.object({
	first_name: z.string(),
	last_name: z.string(),
	email: z.string().email().trim().toLowerCase(),
	phone_number: z.string(),
	country: z.string(),
	city: z.string(),
	address: z.string(),
	profile_image: z.union([z.instanceof(FileList).optional(), z.string()]),
});

const Profile = () => {
	const form = useForm<z.infer<typeof formSchema>>();
	return (
		<section className="py-14">
			<div className="max-w-[700px]">
				<Form {...form}>
					<form>
						<div className="mb-10">
							<div className="flex gap-6">
								<div className="flex size-20 items-center justify-center rounded-full bg-[#EAF0F5]">
									<img src={brokenImage} alt="profile image" />
								</div>
								<div className="text-grayish">
									<p className="mb-4 font-medium">
										Upload .JPG, .JPEG, or .PNG file
									</p>
									<div className="flex gap-4">
										<Button className="bg-[#F6F8FA] text-sm font-bold text-grayish">
											Upload Photo
										</Button>
										<Button className="bg-transparent text-sm font-bold text-accent hover:bg-transparent hover:underline">
											Delete
										</Button>
									</div>
								</div>
							</div>
						</div>
						<section className="space-y-5">
							<div className="grid gap-5 sm:grid-cols-2">
								<FormInput<typeof form>
									form={form}
									name="first_name"
									label="First Name"
									placeholder="First name..."
								/>
								<FormInput
									form={form}
									name="last_name"
									label="Last Name"
									placeholder="First name..."
								/>
								<FormInput
									form={form}
									name="email"
									label="Email"
									placeholder="Email..."
								/>
								<FormInput
									isPhoneNumber
									form={form}
									name="phone_number"
									label="Phone Number (Optional)"
								/>
								<FormInput
									form={form}
									name="country"
									label="Country or Region"
									placeholder="Country..."
								/>
								<FormInput
									form={form}
									name="city"
									label="City"
									placeholder="City..."
								/>
							</div>
							<FormInput
								type="textarea"
								form={form}
								name="address"
								label="Address"
								placeholder="Address..."
							/>
						</section>
						<div className="mt-20 flex">
							<StyledButton
								title="Save Profile"
								className="w-fit bg-accent text-sm font-bold text-white px-10"
							/>
						</div>
					</form>
				</Form>
			</div>
		</section>
	);
};
export default Profile;
