import { Form } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Searchbar({ toggleSearch }) {
  let formStyle = "bg-slate-50 rounded-md px-3 py-1 basis-1/2 md:flex";

  if (toggleSearch) {
    formStyle += " col-span-6 h-10 mx-10 flex md:hidden";
  } else {
    formStyle += " hidden";
  }
  return (
    <Form className={formStyle} action="/search">
      <input
        type="text"
        name="q"
        placeholder="Search games..."
        className="rounded-md bg-slate-50 outline-none text-2xl w-full"
      />
      <button type="submit" className="text-2xl">
        <FaSearch />
      </button>
    </Form>
  );
}
