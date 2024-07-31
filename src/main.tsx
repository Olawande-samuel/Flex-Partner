import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.tsx";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<Toaster
				position="top-right"
				toastOptions={{
					classNames: {
						error: "bg-red-500 text-white",
						success: "bg-green-400 text-white",
						warning: "text-yellow-400",
						info: "bg-blue-400",
					},
				}}
			/>
		</QueryClientProvider>
	</React.StrictMode>,
);
