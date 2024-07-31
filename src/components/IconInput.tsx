import * as React from "react";

import { cn } from "@/lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "./ui/button";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	showIcon: boolean;
	iconClassName?: string;
	Icon?: React.ElementType;
}

const IconInput = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, iconClassName, type, showIcon, Icon, ...props }, ref) => {
		const [showPassword, setShowPassword] = React.useState(false);
		return (
			<div className="relative">
				<input
					type={
						type === "password" ? (showPassword ? "text" : "password") : type
					}
					className={cn(
						"flex h-10 w-full rounded-md border border-slate-200 bg-white px-3  py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
						showIcon && "ps-10",
						className,
					)}
					ref={ref}
					{...props}
				/>
				{showIcon && (
					<i
						className={cn(
							"absolute left-0 top-0 h-full px-3 py-3 hover:bg-transparent",
							iconClassName,
						)}
					>
						{Icon && <Icon color="#64748B" strokeWidth={1} />}
					</i>
				)}
				{type === "password" && (
					<Button
						type="button"
						variant="ghost"
						size="sm"
						className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
						onClick={() => setShowPassword((prev) => !prev)}
					>
						{showPassword ? (
							<EyeIcon className="size-4" aria-hidden="true" />
						) : (
							<EyeOffIcon className="size-4" aria-hidden="true" />
						)}
						<span className="sr-only">
							{showPassword ? "Hide password" : "Show password"}
						</span>
					</Button>
				)}
			</div>
		);
	},
);
IconInput.displayName = "IconInput";

export { IconInput };
