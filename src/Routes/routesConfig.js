import { createBrowserRouter } from "react-router-dom";
import HomeTeste from "../pages/HomeTeste";
import Login from "../auth/pages/login";
import PrivateRoute from "../components/PrivateRoute"; // 🚀 Protege rotas privadas
import Page from "../pages/page";
import Home from "../pages/Home";

// 🚀 Criando o roteador separado
const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    {
        element: <PrivateRoute />, // 🚀 Proteção de rotas
        children: [
            {
                path: "", element: <Page />,
                children: [
                    { path: "home", element: <Home /> },
                    { path: "chat", element: <chat/>}
                ]
            },
            { path: "/homeTeste", element: <HomeTeste /> },
        ],
    },
]);

export default router;
