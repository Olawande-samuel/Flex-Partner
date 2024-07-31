import { ConfigProvider, Steps } from "antd";

interface Props {
	children: React.ReactNode;
	step: number;
}
const customDot = (
	dot: any,
	{ index, status }: { index: any; status: any },
) => (
	<span title={`Step ${index + 1}: ${status}`} className="">
		{dot}
	</span>
);
const SignupSteps = ({ children, step }: Props) => {
	return (
		<div className="size-full ">
			<div className="flex flex-col gap-2 md:flex-row">
				<div>
					<ConfigProvider
						theme={{
							token: {
								colorPrimary: "#FF6600",
							},
							components: {
								Steps: {
									// finishIconBorderColor: "#FF6600",
									descriptionMaxWidth: 200,
								},
							},
						}}
					>
						<Steps
							direction="vertical"
							current={step}
							size="small"
							progressDot={customDot}
							items={[
								{
									title: "STEP 1",
									description: "Enter your details",
								},
								{
									title: "STEP 2",
									description: "Verify your email",
								},
								{
									title: "STEP 3",
									description: "Create your password",
								},
							]}
						/>
					</ConfigProvider>
				</div>
				<div className="grid h-full flex-1 place-items-center">{children}</div>
			</div>
		</div>
	);
};

export default SignupSteps;
