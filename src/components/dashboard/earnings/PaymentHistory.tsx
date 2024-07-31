import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Table from "../Table";
import StatusBadge from "../StatusBadge";
import { IPayment } from "@/lib/types";
const data = [
	{
		paymentId: "#Q2T43RS3",
		method: "Stripe",
		date: "22 Oct, 2020, 11:40 PM",
		amount: "$399.00",
		status: "Successful",
	},
	{
		paymentId: "#Q2T43RS3",
		method: "PayPal",
		date: "22 Oct, 2020, 11:40 PM",
		amount: "$199.00",
		status: "Failed",
	},
];
const columns = [
	{
		name: "Payment ID",
		selector: (row: IPayment) => row.paymentId,
		sortable: true,
		wrap: true,
	},
	{
		name: "Date and time",
		selector: (row: IPayment) => row.date,
		sortable: true,
	},
	{
		name: "Method",
		selector: (row: IPayment) => row.method,
		sortable: true,
		wrap: false,
	},
	{
		name: "Amount",
		selector: (row: IPayment) => row.amount,
		sortable: true,
	},
	{
		name: "Status",
		cell: (row: IPayment) => (
			<StatusBadge title={row.status} status={row.status} />
		),
		sortable: true,
		wrap: false,
	},
];
const PaymentHistory = () => {
	return (
		<Card className="h-full">
			<CardHeader>
				<CardTitle className="text-sm font-semibold">Payout History</CardTitle>
			</CardHeader>
			<CardContent>
				<Table columns={columns} data={data} />
			</CardContent>
		</Card>
	);
};
export default PaymentHistory;
