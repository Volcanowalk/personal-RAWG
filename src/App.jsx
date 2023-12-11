import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [toggleMenu, setToggleMenu] = useState();
  const [toggleCart, setToggleCart] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <div className="grid grid-rows-6 grid-cols-6 h-screen">
      <Header toggleMenu={setToggleMenu} toggleCart={setToggleCart} />
      <Sidebar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <div className="col-span-6 md:col-span-5 row-span-5 ">
        <Outlet context={[cart, setCart]} />
      </div>
      {toggleCart && (
        <Cart setToggleCart={setToggleCart} cart={cart} setCart={setCart} />
      )}
    </div>
  );
}

export default App;
