import AuthHeader from "@/components/auth/AuthHeader";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
	return (
		<div className="grid size-full place-items-center">
			<div className="max-w-[450px] justify-center rounded-2xl bg-white p-4 sm:w-[450px] sm:p-8">
				<div>
					<AuthHeader
						title="Login to FlexFlow Partner"
						subHeading="Enter your email address and password to login."
					/>
					<LoginForm />
				</div>
			</div>
		</div>
	);
};
export default Login;
