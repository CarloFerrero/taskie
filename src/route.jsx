import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "@pages/App";
import ErrorPage from "@pages/404";
import Projects from "./pages/Projects";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/projects",
        element: <Projects />,
        errorElement: <ErrorPage />,
    },
]);