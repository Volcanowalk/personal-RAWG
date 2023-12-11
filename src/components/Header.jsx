import { FaSearch, FaStar } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import Searchbar from "./Searchbar.jsx";
import { useState } from "react";

export default function Header({ toggleMenu, toggleCart }) {
  const [toggleSearch, setToggleSearch] = useState(false);

  function handleClickSearch() {
    setToggleSearch((prev) => !prev);
  }

  function handleClickMenu() {
    toggleMenu((prev) => !prev);
  }

  function handleClickCart() {
    toggleCart((prev) => !prev);
  }

  return (
    <>
      <div
        className="w-full px-8 py-8 flex flex-row col-span-6 justify-between 
      items-center"
      >
        <div className="flex gap-3 items-center">
          <button
            className="text-4xl md:hidden text-slate-50"
            onClick={handleClickMenu}
          >
            <IoMdMenu />
          </button>
          <div className="text-slate-50 md:text-2xl">
            VOLCANOWALK <span className="text-red-400">RAWG</span>
          </div>
        </div>
        <Searchbar toggleSearch={false} />
        <div className="flex gap-5">
          <button
            className="text-2xl text-slate-50 md:hidden"
            onClick={handleClickSearch}
          >
            <FaSearch />
          </button>
          <button
            className="text-slate-50 text-2xl hover:bg-gray-400 
      px-4 py-4 rounded-lg shadow-lg shadow-slate-50 border border-slate-50 
      transition"
            onClick={handleClickCart}
          >
            <FaStar />
          </button>
        </div>
      </div>
      {toggleSearch && <Searchbar toggleSearch={toggleSearch} />}
    </>
  );
}
