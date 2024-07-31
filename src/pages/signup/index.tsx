import AuthHeader from "@/components/auth/AuthHeader";
import SignUpForm from "@/components/auth/SignUpForm";
import SignupSteps from "@/components/auth/SignupSteps";

const Signup = () => {
	return (
		<SignupSteps step={0}>
			<div className="max-w-[450px] justify-center rounded-2xl bg-white p-4 sm:w-[450px] sm:p-8">
				<div>
					<AuthHeader
						title="Sign Up"
						subHeading="Get your FlexFlow Partner account now."
					/>
					<SignUpForm />
				</div>
			</div>
		</SignupSteps>
	);
};
export default Signup;
