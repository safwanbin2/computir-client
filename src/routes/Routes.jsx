import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import App from "../App";
import Service from "../pages/service/Service";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import Tasks from "../pages/tasks/Tasks";
import DragAndDrop from "../pages/dragAndDrop/DragAndDrop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/drag-and-drop",
        element: <DragAndDrop />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
]);
