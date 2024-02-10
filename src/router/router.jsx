import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllUsers from "../pages/AllUsers/AllUsers";
import SingleUser from "../pages/SingleUser/SingleUser";
import NotFound from "../pages/NotFoundPage/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <AllUsers />,
      },
      {
        path: "user/:id",
        element: <SingleUser />,
      },
    ],
  },
]);

export default router;
