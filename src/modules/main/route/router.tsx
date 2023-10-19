import { RouteObject } from "react-router-dom";
import { MainRouteEnum } from "./main-route.enum.ts";
import { lazy } from "react";

const MainView = lazy(() => import("./../view/main.view.tsx"));
const BookDetailsView = lazy(
  () => import("./../view/book-details/book-details.view.tsx")
);

const BookRoute: Array<RouteObject> = [
  {
    path: MainRouteEnum.MAIN_VIEW,
    element: <MainView />,
  },
  {
    path: MainRouteEnum.BOOK_DETAILS_VIEW,
    element: <BookDetailsView />,
  },
];

export { BookRoute };
