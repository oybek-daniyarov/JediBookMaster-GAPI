import { FC } from "react";
import { Card, Pagination, SearchFormType } from "@/modules/main/components";
import { useSearchParam } from "@/modules/core/hooks";
import { useFetchAllBooksQuery } from "@/modules/main/bookApi";
import { generatePath, useNavigate } from "react-router-dom";
import { MainRouteEnum } from "@/modules/main/route";
import { QueryKeyType } from "@/modules/main/repo/fetch-all-books/types";
import { CardListLoading } from "@/modules/main/components/card-list/card-list-loading";
import { CardListNotFound } from "@/modules/main/components/card-list/card-list-not-found";
import { CardListEmptyState } from "@/modules/main/components/card-list/card-list-empty-state";

const PER_PAGE = 8;

const CardList: FC = () => {
  const navigate = useNavigate();

  const { getParam, setParam } = useSearchParam<SearchFormType>();
  const query = getParam("query");
  const page = Number(getParam("page")) || 0;
  const queryKey = getParam("queryKey") as QueryKeyType;
  const queryValue = getParam("queryValue") as string;

  const {
    data: books,
    isLoading,
    isFetching,
    isUninitialized,
  } = useFetchAllBooksQuery(
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

  const loading = isLoading || isFetching;

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
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          <CardListLoading />
        ) : (
          books?.items.map((item, index) => (
            <Card
              book={item}
              key={`${item.id}-${index}`}
              onClick={() => handleCardClick(item.id)}
            />
          ))
        )}
        {!books?.items.length && !isUninitialized ? (
          <CardListNotFound className="col-span-full" />
        ) : null}

        {isUninitialized ? (
          <CardListEmptyState className="col-span-full" />
        ) : null}
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
