import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import HomePage from "./pages/home/Home.jsx";
import UploadVideo from "./pages/uploadVideo/UploadVideo.jsx";
import NF404 from "./pages/notFound/NF404.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		errorElement: <NF404 />,
	},
	{
		path: "/uploadvideo",
		element: <UploadVideo />,
	},
	{
		
	}
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
