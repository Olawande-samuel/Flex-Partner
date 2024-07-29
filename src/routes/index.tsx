import App from "@/App";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Dashboard from "@/pages/dashboard";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/dashboard",
				element: <DashboardLayout />,
				children: [
					{
						index: true,
						element: <Dashboard />,
					},
				],
			},
		],
	},
	// {
	// 	element: <AuthLayout />,
	// 	children: [
	// 		{
	// 			path: "/sign-up",
	// 		},
	// 		{
	// 			path: "/sign-in",
	// 		},
	// 	],
	// },
]);
export default router;
