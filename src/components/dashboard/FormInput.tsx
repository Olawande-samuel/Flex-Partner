import { cn } from "@/lib/utils";
import { PhoneInput } from "../PhoneInput";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
// import CopyButton from "./CopyButton";

interface Props<T> {
	form: T;
	name: string;
	type?: "text" | "password" | "number" | "email" | "textarea";
	label: string;
	placeholder?: string;
	inputClassName?: string;
	required?: boolean;
	sr?: boolean;
	disabled?: boolean;
	wrapperClassName?: string;
	showCopy?: boolean;
	isPhoneNumber?: boolean;
	description?: string;
}

const FormInput = <T extends { control: any }>({
	form,
	name,
	type = "text",
	label,
	placeholder,
	inputClassName,
	wrapperClassName,
	disabled = false,
	isPhoneNumber,
}: Props<T>) => {
	return (
		<div className={cn("relative", wrapperClassName)}>
			<FormField
				name={name}
				control={form.control}
				render={({ field }) => (
					<FormItem>
						<FormLabel>{label}</FormLabel>
						<FormControl>
							<div className="relative">
								{isPhoneNumber ? (
									<PhoneInput
										placeholder={placeholder}
										className={cn("h-12 ", inputClassName)}
										{...field}
										disabled={disabled}
									/>
								) : type === "textarea" ? (
									<Textarea
										placeholder={placeholder}
										className={cn("resize-none ", inputClassName)}
										{...field}
										disabled={disabled}
									/>
								) : (
									<Input
										type={type}
										className={cn(" h-12", inputClassName)}
										placeholder={placeholder}
										{...field}
										disabled={disabled}
									/>
								)}
								{/* {showCopy && <CopyButton value={field.value} />} */}
							</div>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</div>
	);
};
export default FormInput;
