import { FC } from "react";
import { Card, Pagination, SearchFormType } from "@/modules/main/components";
import { useSearchParam } from "@/modules/core/hooks";
import { useFetchAllBooksQuery } from "@/modules/main/bookApi";
import { generatePath, useNavigate } from "react-router-dom";
import { MainRouteEnum } from "@/modules/main/route";
import { QueryKeyType } from "@/modules/main/repo/fetch-all-books/types.ts";

const PER_PAGE = 20;

const CardList: FC = () => {
  const navigate = useNavigate();

  const { getParam, setParam } = useSearchParam<SearchFormType>();
  const query = getParam("query");
  const page = Number(getParam("page")) || 0;
  const queryKey = getParam("queryKey") as QueryKeyType;
  const queryValue = getParam("queryValue") as string;

  const { data: books } = useFetchAllBooksQuery(
    {
      query: query as string,
      queryKey,
      queryValue,
      pagination: {
        perPage: PER_PAGE,
        page: page as number,
      },
    },
    {
      skip: !query,
    }
  );

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

  const handlePageChange = (page: number) => {
    setParam("page", String(page));
  };

  return (
    <>
      <div className="grid lg:grid-cols-4 gap-6">
        {books?.items?.map((item) => (
          <Card
            book={item}
            key={item.id}
            onClick={() => handleCardClick(item.id)}
          />
        )) ?? <div>No books found</div>}
      </div>
      {books?.total && books.total > 0 ? (
        <Pagination
          total={books.total}
          perPage={PER_PAGE}
          page={page}
          onChange={handlePageChange}
        />
      ) : null}
    </>
  );
};

export { CardList };
