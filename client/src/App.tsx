import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="AppContainer">
      <Outlet />
    </div>
  );
}

export default App;
