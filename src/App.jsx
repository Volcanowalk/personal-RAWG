import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="grid grid-rows-6 grid-cols-6 h-screen">
      <Header />
      <Sidebar />
      <div className="col-span-5 row-span-5">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
