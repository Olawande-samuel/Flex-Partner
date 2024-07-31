import { ConfigProvider } from "antd";

const TabsProvider = ({ children }: { children: React.ReactNode }) => {
	return (
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
			{children}
		</ConfigProvider>
	);
};
export default TabsProvider;
