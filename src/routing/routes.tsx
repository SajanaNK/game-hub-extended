import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import GameDetailsPage from "../pages/GameDetailsPage";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "games/:slug",
                element: <GameDetailsPage />
            }
        ]
    }
]);

export default router;