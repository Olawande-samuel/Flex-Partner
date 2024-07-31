import AuthHeader from "@/components/auth/AuthHeader";
import VerifyEmail from "@/components/auth/VerifyEmail";
import SignupSteps from "@/components/auth/SignupSteps";

const EmailVerification = () => {
	return (
		<SignupSteps step={1}>
			<div className="max-w-[450px] justify-center rounded-2xl bg-white p-4 sm:w-[450px] sm:p-8">
				<div>
					<AuthHeader
						title="Verify Your Email Address"
						subHeading="We have sent a verification code to your email address. Please check your inbox (and your spam/junk folder if you don’t see it) for an email from us."
					/>
					<VerifyEmail />
				</div>
			</div>
		</SignupSteps>
	);
};
export default EmailVerification;
