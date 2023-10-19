import { createBrowserRouter } from "react-router-dom";
import { BookRoute } from "@/modules/main/route";
import { MainLayout } from "@/components/layout";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [...BookRoute],
  },
]);
