import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MeetsByIdDetails from "./components/MeetsByIdDetails.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/meets/:meetsId",
    element: <MeetsByIdDetails />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
