import AuthHeader from "@/components/auth/AuthHeader";
import NewPasswordForm from "@/components/auth/NewPasswordForm";
import ResetPassword from "@/components/auth/ResetPassword";
import { useSearchParams } from "react-router-dom";

const PasswordReset = () => {
	const [searchParams] = useSearchParams();
	const token = searchParams.get("token");
	const uidb64 = searchParams.get("uidb64");
	return (
		<div className="grid size-full place-items-center">
			<div className="max-w-[450px] justify-center rounded-2xl bg-white p-4 sm:w-[450px] sm:p-8">
				<div>
					<AuthHeader
						title="Reset Password"
						subHeading={
							token && uidb64
								? "Create new password"
								: "Enter the email address associated with your Account"
						}
					/>
					{token && uidb64 ? <NewPasswordForm /> : <ResetPassword />}
				</div>
			</div>
		</div>
	);
};
export default PasswordReset;
