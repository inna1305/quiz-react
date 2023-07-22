import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as rootLoader } from "@components/form/Form";


import "./style.scss";
import ResultsPage from "./pages/resultsPage";
import { ErrorPage } from "./pages/errorPage";
import App from "@components/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{
      element: <ResultsPage />,
      path: "/results",
      loader: rootLoader
    }]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
