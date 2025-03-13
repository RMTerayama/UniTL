import { createBrowserRouter } from "react-router-dom";
import Login from "../auth/pages/login";
import Page from "../pages/page";
import Home from "../components/Home";

const router = createBrowserRouter([
    {
        path: 'login',
        element: <Login />
    },
    {
        path: '/',
        element: <Page />,
        children: [
            { path: 'home', element: <Home /> }]
    }
]);

export default router;