import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Outlet /> {/* 🚀 Exibe a página correspondente à rota ativa */}
    </div>
  );
}

export default App;
