import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./componentes/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
