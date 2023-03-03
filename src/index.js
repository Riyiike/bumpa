
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/mainPage";
import ErrorPage from "./pages/errorPage";
import CountryDetailPage,{CountryDetailPageLoader} from "./pages/countryDetailPage"
import baseUrl from "./utils/route/baseUrl";


const router = createBrowserRouter([
  {
    path: baseUrl,
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: `${baseUrl}/:countryName`,
        loader: CountryDetailPageLoader,
        element: <CountryDetailPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
  