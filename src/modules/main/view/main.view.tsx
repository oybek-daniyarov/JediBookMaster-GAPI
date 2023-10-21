import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { useFetchAllBooksQuery } from "@/modules/main/bookApi";
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generatePath, useNavigate } from "react-router-dom";
import { MainRouteEnum } from "@/modules/main/route";
import { useSearchParam } from "@/modules/core/hooks";
import { Card } from "@/modules/main/components";
import { Icons } from "@/components/ui/icons";

type SearchParams = {
  query: string;
};

const MainView: FC = () => {
  const [value, setValue] = useState<string>("");
  const { getParam, setParam } = useSearchParam<SearchParams>();
  const navigate = useNavigate();
  const query = getParam("query");

  const { data: books } = useFetchAllBooksQuery(
    {
      query: query as string,
      pagination: {
        perPage: 20,
      },
    },
    {
      skip: !query,
    }
  );
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setParam("query", value);
  };

  const handleCardClick = (id: string) => {
    navigate(
      generatePath(MainRouteEnum.BOOK_DETAILS_VIEW, {
        id,
      }),
      {
        unstable_viewTransition: true,
      }
    );
  };

  useEffect(() => {
    query && setValue(query);
  }, [query]);

  return (
    <div className="container m-auto py-8">
      <div className="grid lg:grid-cols-5 gap-6">
        <div>
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
        <div className="col-span-3 lg:col-span-4 lg:border-l">
          <div className="grid grid-cols-5 gap-6 px-6">
            {books?.items.map((item) => (
              <Card
                book={item}
                key={item.id}
                onClick={() => handleCardClick(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainView;
