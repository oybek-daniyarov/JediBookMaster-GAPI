import { FC } from "react";
import { CardList, SearchForm } from "@/modules/main/components";

const MainView: FC = () => {
  return (
    <div className="container m-auto py-8">
      <div className="fixed w-72 pr-8">
        <SearchForm />
      </div>
      <div className="relative ml-72 ">
        <CardList />
      </div>
    </div>
  );
};

export default MainView;
