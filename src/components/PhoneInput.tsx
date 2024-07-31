import { CheckIcon, ChevronsUpDown } from "lucide-react";

import * as React from "react";

import * as RPNInput from "react-phone-number-input";

import flags from "react-phone-number-input/flags";

import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "./ui/command";
import { Input, InputProps } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";

type PhoneInputProps = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	"onChange" | "value"
> &
	Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
		onChange?: (value: RPNInput.Value) => void;
		inputClassName?: string;
		countryClassName?: string;
	};

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> =
	React.forwardRef<React.ElementRef<typeof RPNInput.default>, PhoneInputProps>(
		({ className, onChange, ...props }, ref) => {
			return (
				<RPNInput.default
					ref={ref}
					className={cn("flex h-full", className)}
					flagComponent={FlagComponent}
					countrySelectComponent={CountrySelect}
					inputComponent={InputComponent}
					onChange={(value) => value !== undefined && onChange?.(value)}
					{...props}
				/>
			);
		},
	);
PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => (
		<Input
			className={cn(
				"rounded-s-none h-full rounded-e-md placeholder-primary placeholder:text-[#060c2c] placeholder:opacity-50",
				className,
			)}
			{...props}
			ref={ref}
		/>
	),
);
InputComponent.displayName = "InputComponent";

type CountrySelectOption = { label: string; value: RPNInput.Country };

type CountrySelectProps = {
	disabled?: boolean;
	value: RPNInput.Country;
	onChange: (value: RPNInput.Country) => void;
	options: CountrySelectOption[];
	className?: string;
};

const CountrySelect = ({
	disabled,
	value,
	onChange,
	options,
	className,
}: CountrySelectProps) => {
	const handleSelect = React.useCallback(
		(country: RPNInput.Country) => {
			onChange(country);
		},
		[onChange],
	);
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					type="button"
					variant={"outline"}
					className={cn(
						"flex gap-2 rounded-e-none rounded-s-md px-3 h-full",
						className,
					)}
					disabled={disabled}
				>
					<span className="md:hidden xl:inline-block">
						<FlagComponent
							country={value ?? "US"}
							countryName={value ?? "US"}
						/>
					</span>
					<span className="text-foreground/50 text-sm">
						{value
							? `+${RPNInput.getCountryCallingCode(value)}`
							: `+${RPNInput.getCountryCallingCode("US")}`}
					</span>
					<ChevronsUpDown
						className={cn(
							"-mr-2 h-4 w-4 opacity-50",
							disabled ? "hidden" : "opacity-100",
						)}
					/>
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[300px] p-0">
				<Command>
					<CommandList>
						<ScrollArea className="h-72">
							<CommandInput placeholder="Search country..." />
							<CommandEmpty>No country found.</CommandEmpty>
							<CommandGroup>
								{options
									.filter((x) => x.value)
									.map((option) => (
										<CommandItem
											className="gap-2"
											key={option.value}
											onSelect={() => handleSelect(option.value)}
										>
											<FlagComponent
												country={option.value}
												countryName={option.label}
											/>
											<span className="flex-1 text-sm">{option.label}</span>
											{option.value && (
												<span className="text-foreground/50 text-sm">
													{`+${RPNInput.getCountryCallingCode(option.value)}`}
												</span>
											)}
											<CheckIcon
												className={cn(
													"ml-auto h-4 w-4",
													option.value === value ? "opacity-100" : "opacity-0",
												)}
											/>
										</CommandItem>
									))}
							</CommandGroup>
						</ScrollArea>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
	const Flag = flags[country];

	return (
		<span className="bg-foreground/20 flex size-6 overflow-hidden rounded-full">
			{Flag && <Flag title={countryName} />}
		</span>
	);
};
FlagComponent.displayName = "FlagComponent";

export { PhoneInput };
