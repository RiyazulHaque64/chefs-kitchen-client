import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-10/12 mx-auto">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
