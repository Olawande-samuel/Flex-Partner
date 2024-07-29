import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		{/* <Toaster
			position="top-right"
			toastOptions={{
				classNames: {
					error: "bg-red-500 text-white",
					success: "bg-green-400 text-white",
					warning: "text-yellow-400",
					info: "bg-blue-400",
				},
			}}
		/> */}
	</React.StrictMode>,
);
