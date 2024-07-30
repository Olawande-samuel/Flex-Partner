import Overview from "@/components/dashboard/Overview";
import ReferralCharts from "@/components/dashboard/ReferralCharts";
import SubscriptionTable from "@/components/dashboard/SubscriptionTable";

const Dashboard = () => {
	return (
		<div className="">
			<section className="mb-8">
				<Overview />
			</section>
			<section className="mb-14">
				<ReferralCharts />
			</section>
			<section>
				<SubscriptionTable />
			</section>
		</div>
	);
};
export default Dashboard;
