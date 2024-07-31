interface Props {
	title: string;

	subHeading: string;
}

const AuthHeader = ({ title, subHeading }: Props) => {
	return (
		<div className="flex flex-col items-center justify-center mb-8">
			<h1 className="font-bold text-black text-2xl mb-3">{title}</h1>

			<p className="text-grayish text-sm text-center">{subHeading}</p>
		</div>
	);
};

export default AuthHeader;
