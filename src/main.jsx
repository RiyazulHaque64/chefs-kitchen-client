import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthProvider from "./providers/AuthProvider";
import ChefRecepes from "./pages/ChefRecepes";
import PrivateRoute from "./routes/PrivateRoute";
import ErrorPage from "./components/ErrorPage";
import Blogs from "./pages/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://chefs-kitchen-server-riyazulhaque64-gmailcom.vercel.app/chef"
          ),
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <ChefRecepes />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chefs-kitchen-server-riyazulhaque64-gmailcom.vercel.app/chef/${params.id}`
          ),
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
        element: <Blogs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
