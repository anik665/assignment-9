import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layout/Mainlayout/Mainlayout";
import Home from "../pages/Home/Home";
import Login from "../pages/log/Login";
import ErrorPage from "../pages/Err/ErrorPage";
import Catagories from "../Component/catagories/Catagories";
import Register from "../pages/Res/Register";

const router = createBrowserRouter([
  // 🔐 Auth Routes (NO MainLayout)
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },

  // 🌍 Main App Routes
  {
    path: "/",
    Component: Mainlayout,
    children: [
      { index: true, Component: Home },

      {
        path: "catagory/:id",
        element: <Catagories />,
        loader: () => fetch("/skills.json"),
      },
    ],
  },

  // ❌ Error Page
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
