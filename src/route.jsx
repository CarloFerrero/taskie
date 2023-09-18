import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "@pages/App";
import ErrorPage from "@pages/404";
import Projects from "./pages/Projects";
import HooksExaple from "./example/useState";
import EventHandling from "./example/eventsHandling";
import SchoolAttendance from "./example/conditionalRendering";

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
    {
        path: "/hooks-example",
        element: <HooksExaple />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/events-example",
        element: <EventHandling />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/conditional-rendering-example",
        element: <SchoolAttendance />,
        errorElement: <ErrorPage />,
    },
]);