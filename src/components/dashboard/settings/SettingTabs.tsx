import { cn } from "@/lib/utils";
import TabsProvider from "@/providers/TabsProvider";
import { Tabs } from "antd";
import { useState } from "react";
import Profile from "./Profile";
import PaymentAccount from "./PaymentAccount";
import Password from "./Password";

const tabItems = [
	{
		label: "Profile",
		key: "1",
		count: 70,
		children: <Profile />,
	},
	{
		label: "Payment Account",
		key: "2",
		count: 80,
		children: <PaymentAccount />,
	},
	{
		label: "Password",
		key: "3",
		count: 80,
		children: <Password />,
	},
];

const { TabPane } = Tabs;

const SettingTabs = () => {
	const [selectedTab, setSelectedTab] = useState("1");
	const handleTabChange = (key: string) => {
		setSelectedTab(key);
	};
	return (
		<div>
			<TabsProvider>
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
										"text-grayish",
										selectedTab === tab.key && "text-accent font-semibold",
									)}
								>
									{tab.label}
								</span>
							}
						>
							{tab.children}
						</TabPane>
					))}
				</Tabs>
			</TabsProvider>
		</div>
	);
};
export default SettingTabs;
