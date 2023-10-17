import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout";
import { MainRouteEnum } from "@/modules/main";
import { MainView } from "@/modules/main/view";
import { BookRoute } from "@/modules/book/route";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: MainRouteEnum.HOME,
        element: <MainView />,
      },
      ...BookRoute,
    ],
  },
]);
