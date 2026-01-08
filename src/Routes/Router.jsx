import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layout/Mainlayout/Mainlayout";
import Home from "../pages/Home/Home";
import Login from "../pages/log/Login";
import ErrorPage from "../pages/Err/ErrorPage";
import Catagories from "../Component/catagories/Catagories";
import Register from "../pages/Res/Register";
import Profile from "../pages/Profile/Profile";
import ProfileLayout from "../Layout/ProfileLayout/ProfileLayout";
import Forms from "../pages/Profile/Form";
import Form from "../pages/Profile/Form";
import BookSession from "../Component/catagories/BookSession";
import PrivetRoute from "../Provider/PrivetRoute";

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
      { index: true, Component: Home, loader: () => fetch("/skills.json") },

      {
        path: "catagory/:id",
        element: <Catagories />,
        loader: () => fetch("/skills.json"),
      },
    ],
  },
  {
    path: "profile",
    Component: ProfileLayout,
    children: [
      { index: true, Component: Profile },
      { path: "form", element: <Form /> },
    ],
  },
  {
    path: "viewDetails/:id",
    element: (
      <PrivetRoute>
        <BookSession />
      </PrivetRoute>
    ),
    loader: () => fetch("/skills.json"),
  },

  // ❌ Error Page
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
