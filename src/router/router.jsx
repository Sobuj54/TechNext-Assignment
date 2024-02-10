import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllUsers from "../pages/AllUsers/AllUsers";
import SingleUser from "../pages/SingleUser/SingleUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
