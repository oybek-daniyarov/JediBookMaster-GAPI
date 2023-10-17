import { RouteObject } from "react-router-dom";
import { BookRouteEnum } from "@/modules/book/route/book-route.enum.ts";
import { BookMainView } from "@/modules/book/view";

export const BookRoute: Array<RouteObject> = [
  {
    path: BookRouteEnum.MAIN,
    element: <BookMainView />,
    children: [
      {
        path: BookRouteEnum.DETAIL_PAGE,
      },
    ],
  },
];
