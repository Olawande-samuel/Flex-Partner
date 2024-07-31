const SectionHeader = ({
	title,
	subtext,
}: {
	title: string;
	subtext?: string;
}) => {
	return (
		<div className="mx-auto mb-16 max-w-[576px]">
			<h2 className="mb-5 text-center text-[2.8rem] font-bold">{title}</h2>
			<p className="text-center text-lg text-[#0F172A]">{subtext}</p>
		</div>
	);
};
export default SectionHeader;
