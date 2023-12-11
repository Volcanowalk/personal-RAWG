import { useRouteError, Link } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-slate-50 text-3xl flex justify-center items-center h-[100vh]">
      Nothing to see here!
      <span className="text-red-500">
        <Link to="last30days">Click this text to go back!</Link>
      </span>
    </div>
  );
}
