import DisplayCard from "../DisplayCard";
import moneyBag from "@/assets/icons/money-bag-bold.svg";

const EarningsStats = () => {
	return (
		<div className="space-y-5">
			<DisplayCard title="Available Payout" showButton img={moneyBag} />
			<DisplayCard title="Available Payout" img={moneyBag} />
			<DisplayCard title="Available Payout" img={moneyBag} />
		</div>
	);
};
export default EarningsStats;
