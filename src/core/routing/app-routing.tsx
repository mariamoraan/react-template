import { createBrowserRouter } from "react-router-dom";
import { Urls } from "./urls";

export const AppRouting = createBrowserRouter([
  {
    path: Urls.HOME,
    element: <p>Hola</p>,
  },
]);
