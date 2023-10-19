import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  return (
    <div className="flex-1">
      <Suspense fallback={<div>Loading for now...</div>}>
        <div className="relative">
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};

export { MainLayout };
