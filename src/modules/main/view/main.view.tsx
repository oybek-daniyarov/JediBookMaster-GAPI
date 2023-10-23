import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { useSearchParam } from "@/modules/core/hooks";
import { CardList } from "@/modules/main/components";
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

type SearchParams = {
  query: string;
  page: string;
};

const MainView: FC = () => {
  const [value, setValue] = useState<string>("");
  const { getParam, setParams } = useSearchParam<SearchParams>();
  const query = getParam("query");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setParams({
      query: value.trim(),
      page: "0",
    });
  };

  useEffect(() => {
    query && setValue(query);
  }, [query]);

  return (
    <div className="container m-auto py-8">
      <div className="fixed w-72 pr-8">
        <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
          <div className="w-full flex flex-col gap-2">
            <Input
              value={value}
              onChange={handleChange}
              placeholder="Search for books"
            />{" "}
            <span className="cursor-pointer flex gap-1 items-center text-sm text-muted-foreground">
              <Filter className="h-4 w-4" /> Filter
            </span>
          </div>
          <Button disabled={!value} size="icon">
            <Icons.Search className="h-4 w-4" />
          </Button>
        </form>
      </div>
      <div className="relative ml-72 ">
        <CardList />
      </div>
    </div>
  );
};

export default MainView;
