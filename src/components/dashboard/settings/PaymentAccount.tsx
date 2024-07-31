import ActiveButton from "@/components/ActiveButton";
import StyledSwitch from "../StyledSwitch";
import PayoutIntervalButton from "./PayoutIntervalButton";
import ChangeAccountNumber from "./ChangeAccountNumber";

const PaymentAccount = () => {
	return (
		<section className="py-14">
			<div className="max-w-[700px]">
				<div className="space-y-8">
					<div className="flex items-center justify-between">
						<div className="space-y-1">
							<p className="text-sm font-bold text-blackish2">
								Activate Automatic Payout?
							</p>
							<p className="text-xs text-subtext">
								Send payout automatically to your preferred payout account
							</p>
						</div>
						<div>
							<StyledSwitch />
						</div>
					</div>
					<div className="flex items-center justify-between">
						<div className="space-y-1">
							<p className="text-sm font-bold text-blackish2">
								Payout Interval
							</p>
							<p className="text-xs text-subtext">
								Set default payout interval for payout
							</p>
						</div>
						<div>
							<PayoutIntervalButton />
						</div>
					</div>
				</div>
				<div className="mt-28 flex flex-wrap items-center justify-between">
					<ActiveButton title="Save Change" className="w-fit px-10" />
					<ChangeAccountNumber />
				</div>
			</div>
		</section>
	);
};
export default PaymentAccount;
