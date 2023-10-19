import { RouteObject } from "react-router-dom";
import { MainRouteEnum } from "./main-route.enum.ts";
import { lazy } from "react";

const MainView = lazy(() => import("./../view/main.view.tsx"));

const BookRoute: Array<RouteObject> = [
  {
    path: MainRouteEnum.MAIN_VIEW,
    element: <MainView />,
    children: [
      {
        path: MainRouteEnum.BOOK_DETAILS_VIEW,
      },
    ],
  },
];

export { BookRoute };
