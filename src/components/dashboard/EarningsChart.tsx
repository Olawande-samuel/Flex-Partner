import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from "@/components/ui/chart";
import useDataQuery from "@/hooks/useDataQuery";
import API from "@/lib/API";
import moment from "moment";
import { useMemo } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface chartResData {
	month: number;
	total_referrals: number;
	subscribed_referrals: number;
}

// const chartData = [
// 	{ month: "January", total: 186, subscribed: 80 },
// 	{ month: "February", total: 305, subscribed: 200 },
// 	{ month: "March", total: 237, subscribed: 120 },
// 	{ month: "April", total: 73, subscribed: 190 },
// 	{ month: "May", total: 209, subscribed: 130 },
// 	{ month: "June", total: 214, subscribed: 140 },
// 	{ month: "July", total: 214, subscribed: 140 },
// 	{ month: "August", total: 214, subscribed: 140 },
// 	{ month: "September", total: 214, subscribed: 140 },
// 	{ month: "October", total: 214, subscribed: 140 },
// 	{ month: "November", total: 214, subscribed: 140 },
// 	{ month: "December", total: 214, subscribed: 140 },
// ];

const chartConfig = {
	desktop: {
		label: "Total Referrals",
		color: "#FF6600",
	},
	mobile: {
		label: "Subscribed Referrals",
		color: "#F9DDCD",
	},
} satisfies ChartConfig;

function EarningsChart() {
	const REQ = new API();
	const { data } = useDataQuery({
		queryKey: ["get chart data"],
		queryFn: () =>
			REQ.getChartData({ year: new Date().getFullYear().toString() }),
	});

	console.log(data);
	// data transformation
	const chartData = useMemo(() => {
		if (Array.isArray(data?.data)) {
			const transformed = data.data.map((month: chartResData) => {
				return {
					month: moment()
						.month(month.month - 1)
						.format("MMMM"),
					total: month.total_referrals,
					subscribed: month.subscribed_referrals,
				};
			});
			return transformed;
		}
		return [];
	}, [data]);

	return (
		<Card className="h-full rounded-2xl border-accentGray bg-white">
			<CardHeader className="mb-14">
				<CardTitle className="text-sm font-semibold">YOUR REFERRALS</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer
					config={chartConfig}
					className="h-[250px] min-h-[150px] w-full"
				>
					<BarChart accessibilityLayer data={chartData}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<YAxis
							dataKey="total"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							// tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip content={<ChartTooltipContent />} />
						<Bar dataKey="total" fill="var(--color-desktop)" radius={4} />
						<Bar dataKey="subscribed" fill="var(--color-mobile)" radius={4} />
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}

export default EarningsChart;
