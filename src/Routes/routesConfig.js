import { createBrowserRouter } from "react-router-dom";
import HomeTeste from "../pages/HomeTeste";
import Login from "../auth/pages/login";
import PrivateRoute from "../components/PrivateRoute";
import Page from "../pages/page";
import Home from "../pages/Home";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <Page />,
        children: [
          { path: "home", element: <Home /> },
          { path: "chat", element: <chat /> }, // Certifique-se de que <Chat /> esteja importado corretamente
        ],
      },
      { path: "/homeTeste", element: <HomeTeste /> },
    ],
  },
]);

export default router;
