import EarningsChart from "./EarningsChart";
import ReferralLink from "./ReferralLink";

const ReferralCharts = () => {
	return (
		<section className="flex flex-col  gap-8 lg:h-[420px] lg:flex-row">
			<div className="h-full flex-[65%]">
				<EarningsChart />
			</div>
			<div className="h-full flex-[35%]">
				<ReferralLink />
			</div>
		</section>
	);
};
export default ReferralCharts;
