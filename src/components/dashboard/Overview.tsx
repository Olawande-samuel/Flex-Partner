import DisplayCard from "./DisplayCard";

const Overview = () => {
	return (
		<div className="flex flex-wrap gap-5 lg:gap-8">
			<div className="min-w-52 flex-1">
				<DisplayCard />
			</div>
			<div className="min-w-52 flex-1">
				<DisplayCard />
			</div>
			<div className="min-w-52 flex-1">
				<DisplayCard />
			</div>
		</div>
	);
};
export default Overview;
