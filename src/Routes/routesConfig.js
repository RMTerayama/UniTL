import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeTeste from "../pages/HomeTeste";
import Login from "../auth/pages/login";
import PrivateRoute from "../components/PrivateRoute";
import Page from "../pages/page";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import Ajustes from "../pages/Ajustes";

// 🚀 Criando o roteador separado

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <Page />,
        children: [
          { index: true, element: <Navigate to="/home" /> }, // Redireciona a raiz para /home
          { path: "home", element: <Home /> },
          { path: "chat", element: <Chat /> },
          { path: "ajustes", element: <Ajustes /> },
        ],
      },
      { path: "/homeTeste", element: <HomeTeste /> },
    ],
  },
]);


export default router;
