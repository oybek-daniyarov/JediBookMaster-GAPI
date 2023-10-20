import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useLazyFetchAllBooksQuery } from "@/modules/main/bookApi.ts";
import { Input } from "@/components/ui/input.tsx";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

const MainView: FC = () => {
  const [value, setValue] = useState<string>("");

  const [fetchAllBooks, books] = useLazyFetchAllBooksQuery();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    value &&
      fetchAllBooks({
        query: value,
        pagination: {
          maxResults: 20,
        },
      });
  };

  return (
    <div className="container m-auto">
      <div className="grid grid-cols-2">
        <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
          <div className="w-full flex flex-col gap-2">
            <Input onChange={handleChange} placeholder="Search for books" />{" "}
            <span className="cursor-pointer flex gap-1 items-center text-sm text-muted-foreground">
              <Filter className="h-4 w-4" /> Filter
            </span>
          </div>
          <Button disabled={!value}>Search</Button>
        </form>
        <div className="grid grid-cols-4 gap-4">
          {books?.data?.items.map((item) => {
            return (
              <div key={item.id} className="p-4 bg-accent">
                {item.volumeInfo.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainView;
