import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import Alert from "@/assets/images/alert.svg";
import useUserStore from "@/store/user-store";
import ActiveButton from "../ActiveButton";

const SignOut = () => {
	const navigate = useNavigate();
	const { resetUser } = useUserStore();

	function signOut() {
		resetUser();
		localStorage.clear();
		navigate("/login");
	}
	return (
		<div>
			<Dialog>
				<DialogTrigger>
					<button className="mx-auto flex w-full items-center gap-3 ps-8 text-grayish hover:text-[#FF3B30] ">
						<LogOut />
						Sign out
					</button>
				</DialogTrigger>
				<DialogContent className="max-w-[400px]">
					<DialogHeader className="mb-10 text-center ">
						<div className="mb-12 flex justify-center">
							<img src={Alert} width={100} height={20} className="max-w-full" />
						</div>
						<DialogTitle className="text-center">Sign Out</DialogTitle>
						<DialogDescription className="mx-auto mt-3 text-center text-xs sm:w-9/12">
							Are you sure you want to sign out of your account on Flexflow
						</DialogDescription>
					</DialogHeader>
					<DialogFooter className="flex w-full items-center gap-5 sm:justify-center ">
						<Button
							onClick={signOut}
							className="basis-1/2 bg-accentLight text-accent"
						>
							Sign Out
						</Button>
						<DialogClose asChild>
							<ActiveButton
								title="Cancel"
								className="h-10 flex-1 rounded-lg py-4"
								// wrapperClassName="basis-1/2"
							/>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
};
export default SignOut;
