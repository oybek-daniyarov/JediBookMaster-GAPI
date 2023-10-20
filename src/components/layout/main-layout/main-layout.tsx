import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { QuickSearch } from "@/modules/main/components";

const MainLayout: FC = () => {
  return (
    <Suspense fallback={<div>Loading for now...</div>}>
      <div className="container py-4">
        <QuickSearch />
      </div>

      <Outlet />
    </Suspense>
  );
};

export { MainLayout };
