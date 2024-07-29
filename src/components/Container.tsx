import { cn } from "@/lib/utils";

interface Props {
	className?: string;
	children: React.ReactNode;
}
const Container = ({ children, className }: Props) => {
	return (
		<div className={cn("px-4 md:px-10 lg:px-14 xl:px-20 h-full", className)}>
			{children}
		</div>
	);
};
export default Container;
