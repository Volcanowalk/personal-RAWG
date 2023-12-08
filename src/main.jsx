import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Display from "./components/Display.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GameDetail from "./components/GameDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "thisweek", element: <Display title="This Week" /> },
      { path: "nextweek", element: <Display title="Next Week" /> },
      { path: "last30days", element: <Display title="Last 30 Days" /> },
      { path: "goty", element: <Display title="Game of the Year" /> },
      { path: "popular", element: <Display title="Popular in 2022" /> },
      { path: "alltimebest", element: <Display title="All Time Best" /> },
      { path: "pc", element: <Display title="PC" /> },
      { path: "playstation", element: <Display title="PlayStation" /> },
      { path: "xbox", element: <Display title="Xbox" /> },
      { path: "nintendo", element: <Display title="Nintendo" /> },
      { path: "action", element: <Display title="Action" /> },
      { path: "strategy", element: <Display title="Strategy" /> },
      { path: "rpg", element: <Display title="RPG" /> },
      { path: "shooter", element: <Display title="Shooter" /> },
      { path: "racing", element: <Display title="Racing" /> },
      { path: "sports", element: <Display title="Sports" /> },
      { path: "details/:id", element: <GameDetail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <RouterProvider router={router} />
  //</React.StrictMode>
);
