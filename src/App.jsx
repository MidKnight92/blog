import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div id="page-body">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
