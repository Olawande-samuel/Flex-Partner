import useDataQuery from "@/hooks/useDataQuery";
import DisplayCard from "./DisplayCard";
import API from "@/lib/API";
import { currencyFormatter } from "@/lib/utils";
import users from "@/assets/icons/user-group.svg";
import userCheck from "@/assets/icons/user-check.svg";
import moneyBag from "@/assets/icons/money-bag-bold.svg";

const Overview = () => {
	const REQ = new API();

	const { data } = useDataQuery({
		queryKey: ["get dashboard stats"],
		queryFn: REQ.getStats,
	});

	return (
		<div className="flex flex-wrap gap-5 lg:gap-8">
			<div className="min-w-52 flex-1">
				<DisplayCard
					title="TOTAL REFERRALS"
					value={data?.total_referrals ?? 0}
					img={users}
				/>
			</div>
			<div className="min-w-52 flex-1">
				<DisplayCard
					title="SUBSCRIBED REFERRALS"
					value={data?.subscribed_referrals ?? 0}
					img={userCheck}
				/>
			</div>
			<div className="min-w-52 flex-1">
				<DisplayCard
					title="TOTAL REFERRALS"
					value={currencyFormatter(data?.total_earnings)}
					img={moneyBag}
				/>
			</div>
		</div>
	);
};
export default Overview;
