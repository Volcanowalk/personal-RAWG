import { FaSearch, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <div className="w-full px-8 py-8 flex flex-row col-span-6 justify-between items-center">
      <div className="text-slate-50 md:text-2xl">
        VOLCANOWALK <span className="text-red-400">RAWG</span>
      </div>
      <form
        className="bg-slate-50 rounded-md px-3 py-1 basis-1/2 
      flex"
      >
        <input
          type="search"
          name="search"
          placeholder="Search games..."
          className="rounded-md bg-slate-50 outline-none text-2xl w-full"
        />
        <button className="text-2xl">
          <FaSearch />
        </button>
      </form>
      <button
        className="text-slate-50 text-2xl hover:bg-gray-400 
      px-4 py-4 rounded-lg shadow-lg shadow-slate-50 border border-slate-50 
      transition"
      >
        <FaShoppingCart />
      </button>
    </div>
  );
}
