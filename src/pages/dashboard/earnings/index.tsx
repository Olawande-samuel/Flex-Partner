import EarningsStats from "@/components/dashboard/earnings/EarningsStats";
import PaymentHistory from "@/components/dashboard/earnings/PaymentHistory";

const Earnings = () => {
	return (
		<div className="">
			<section className="mb-8 flex flex-col gap-6 xl:flex-row">
				<aside className="w-auto xl:w-80">
					<EarningsStats />
				</aside>
				<main className="flex-1">
					<PaymentHistory />
				</main>
			</section>
		</div>
	);
};
export default Earnings;
