import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { QuickSearch } from "@/modules/main/components";

const MainLayout: FC = () => {
  return (
    <Suspense fallback={<div>Loading for now...</div>}>
      <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <QuickSearch />
        </div>
      </div>
      <Outlet />
    </Suspense>
  );
};

export { MainLayout };
