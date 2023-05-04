import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Blog from "../pages/Blog/Blog";
import Register from "../pages/Login/Register/Register";
import ViewRecipes from "../pages/ViewRecipes/ViewRecipes";
import PrivateRoute from "./PrivateRoute.jsx/PrivateRoute";
import LoadingSpinner from "../providers/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../providers/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/viewRecipes",
        element: (
          <PrivateRoute>
            <ViewRecipes />
          </PrivateRoute>
        ),
    },
    {
        path: '/loading',
        element: <LoadingSpinner />,
    }
    ],
  },
]);

export default router;
