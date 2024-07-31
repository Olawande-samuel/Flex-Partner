import AuthHeader from "@/components/auth/AuthHeader";
import CreatePasswordForm from "@/components/auth/CreatePasswordForm";
import SignupSteps from "@/components/auth/SignupSteps";

const CreatePassword = () => {
	return (
		<SignupSteps step={2}>
			<div className="max-w-[450px] justify-center rounded-2xl bg-white p-4 sm:w-[450px] sm:p-8">
				<div>
					<AuthHeader
						title="Create Password"
						subHeading="Create a secure password"
					/>
					<CreatePasswordForm />
				</div>
			</div>
		</SignupSteps>
	);
};
export default CreatePassword;
