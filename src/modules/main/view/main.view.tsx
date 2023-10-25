import { FC } from "react";
import { CardList, SearchForm } from "@/modules/main/components";

const MainView: FC = () => {
  return (
    <div className="container m-auto py-8">
      <div className="md:fixed md:w-72 md:pr-8 mb-6 md:mb-0">
        <SearchForm />
      </div>
      <div className="relative md:ml-72 ">
        <CardList />
      </div>
    </div>
  );
};

export default MainView;
