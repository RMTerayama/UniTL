import { createBrowserRouter } from "react-router-dom";
import HomeTeste from "../pages/HomeTeste";
import Login from "../auth/pages/login";
import PrivateRoute from "../components/PrivateRoute"; // 🚀 Protege rotas privadas

// 🚀 Criando o roteador separado
const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    element: <PrivateRoute />, // 🚀 Proteção de rotas
    children: [{ path: "/homeTeste", element: <HomeTeste /> }],
  },
]);

export default router;
