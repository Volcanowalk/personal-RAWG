import { IoMdClose } from "react-icons/io";

export default function Cart({ setToggleCart, cart, setCart }) {
  function handleClose() {
    setToggleCart((prev) => !prev);
  }

  function handleDelete(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <aside
      className="bg-[#343434] top-0 right-0 fixed w-[100vw] md:w-[30vw] h-full rounded-l-xl
    p-10 slideInRight flex flex-col gap-8 overflow-y-scroll"
    >
      <div className="flex justify-between">
        <h1 className="text-slate-50 text-center text-3xl">Wishlist</h1>
        <button className="text-slate-50 text-3xl" onClick={handleClose}>
          <IoMdClose />
        </button>
      </div>
      {cart.map((item) => {
        return (
          <div
            key={item.id}
            className="border border-slate-50 px-3 py-3 rounded-lg flex
           items-center gap-3"
          >
            <img src={item.image} alt={item.name} className="w-1/2" />
            <span className="text-slate-50 font-semibold">{item.name}</span>
            <button
              className="text-slate-50 text-xl"
              onClick={() => handleDelete(item.id)}
            >
              <IoMdClose />
            </button>
          </div>
        );
      })}
    </aside>
  );
}
