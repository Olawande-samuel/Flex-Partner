import { ConfigProvider, Tabs } from "antd";
import { Card, CardContent } from "../ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import DatePicker from "./DatePicker";
import Table from "./Table";
import StatusBadge from "./StatusBadge";
import { IReferral } from "@/lib/types";
const { TabPane } = Tabs;
const data = [
	{
		reference: "#Q2T43RS3",
		name: "Leatrice Handler",
		date: "22 Oct, 2020, 11:40 PM",
		commission: "$399.00",
		status: "Subscribed",
	},
	{
		reference: "#Q2T43RS3",
		name: "Marielle Wigington",
		date: "22 Oct, 2020, 11:40 PM",
		commission: "$399.00",
		status: "Not-Subscribed",
	},
];
const columns = [
	{
		name: "Reference",
		selector: (row: IReferral) => row.reference,
		sortable: true,
		wrap: true,
	},
	{
		name: "Name",
		selector: (row: IReferral) => row.name,
		sortable: true,
	},
	{
		name: "Date and time",
		selector: (row: IReferral) => row.date,
		sortable: true,
		wrap: false,
	},
	{
		name: "Commission",
		selector: (row: IReferral) => row.commission,
		sortable: true,
	},
	{
		name: "Status",
		selector: (row: IReferral) => row.status,
		sortable: true,
	},
	{
		name: "Status",
		cell: (row: IReferral) => (
			<StatusBadge title={row.status} status={row.status} />
		),
		sortable: true,
		wrap: false,
	},
];

const SubscriptionTable = () => {
	// const [dates, setDates] = useState<[string, string]>(["", ""]);
	const [selectedTab, setSelectedTab] = useState("1");
	const handleTabChange = (key: string) => {
		setSelectedTab(key);
	};

	const tabItems = [
		{
			label: "All",
			key: "1",
			count: 70,
			children: () => <p>Table 1</p>,
		},
		{
			label: "Subscribed",
			key: "2",
			count: 80,
			children: () => <p>Table 2</p>,
		},
	];

	return (
		<section>
			<Card>
				<CardContent className="relative">
					<div className="relative right-4 top-3 z-10 mb-4 [@media(width>=580px)]:absolute">
						<DatePicker />
					</div>
					<ConfigProvider
						theme={{
							components: {
								Tabs: {
									inkBarColor: "#FF6600",
									itemSelectedColor: "#FF6600",
									itemColor: "#64748B",
									itemHoverColor: "#FF6600",
								},
							},
						}}
					>
						<Tabs
							activeKey={selectedTab}
							onChange={handleTabChange}
							defaultActiveKey="1"
							indicator={{ size: 70, align: "center" }}
							size="large"
							tabBarGutter={34}
						>
							{tabItems.map((tab) => (
								<TabPane
									key={tab.key}
									tab={
										<span
											className={cn(
												"text-black",
												selectedTab === tab.key && "text-accent font-semibold",
											)}
										>
											{tab.label}
											{tab.count > 0 && (
												<Badge
													className={cn(
														"ml-2 font-normal text-xs p-0 px-1 text-white bg-grayish",
														selectedTab === tab.key && "bg-accent text-white",
													)}
												>
													{tab.count}
												</Badge>
											)}
										</span>
									}
								>
									<Table
										columns={columns}
										data={
											tab.key === "2"
												? data.filter(
														(item) => item.status === "Not-Subscribed",
													)
												: data
										}
									/>
								</TabPane>
							))}
						</Tabs>
					</ConfigProvider>
				</CardContent>
			</Card>
		</section>
	);
};
export default SubscriptionTable;
