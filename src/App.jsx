import { Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <h1 className="App">My Awesome blog</h1>
      <div id="page-body">Welcome to my blog</div>
      <Outlet />
    </div>
  );
}

export default App;
