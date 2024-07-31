import App from "@/App";
import AuthLayout from "@/components/auth/AuthLayout";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import HomePage from "@/pages";
import CreatePassword from "@/pages/create-password";
import Dashboard from "@/pages/dashboard";
import Earnings from "@/pages/dashboard/earnings";
import HelpDesk from "@/pages/dashboard/help-desk";
import Settings from "@/pages/dashboard/settings";
import Login from "@/pages/login";
import PasswordReset from "@/pages/reset-password";
import Signup from "@/pages/signup";
import EmailVerification from "@/pages/verify-email";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				element: <AuthLayout />,
				children: [
					{
						path: "/sign-up",
						element: <Signup />,
					},
					{
						path: "/login",
						element: <Login />,
					},
					{
						path: "/verify-email",
						element: <EmailVerification />,
					},
					{
						path: "/create-password",
						element: <CreatePassword />,
					},
					{
						path: "/reset-password",
						element: <PasswordReset />,
					},
					// {
					// 	id: "verify",
					// 	path: "/verify-phone",
					// 	element: <PhoneVerification />,
					// 	children: [],
					// },
					// {
					// 	id: "verify-success",
					// 	path: "/verify-phone/success",
					// 	element: <VerificationSuccess />,
					// },
					// {
					// 	path: "terms-and-conditions",
					// 	element: <Terms />,
					// },
				],
			},
			{
				path: "/dashboard",
				element: <DashboardLayout />,
				children: [
					{
						index: true,
						element: <Dashboard />,
					},
					{
						path: "earnings",
						element: <Earnings />,
					},
					{
						path: "settings",
						element: <Settings />,
					},
					{
						path: "help-desk",
						element: <HelpDesk />,
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
