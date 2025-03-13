import { Routes, Route } from "react-router-dom";
import Login from "./auth/pages/login";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute"; // 🚀 Importamos a Rota Privada

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      
      {/* 🚀 Protegendo a rota Home */}
      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
