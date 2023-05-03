import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-10/12 mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
