import { FC } from "react";
import { Card, Pagination } from "@/modules/main/components";
import { useSearchParam } from "@/modules/core/hooks";
import { useFetchAllBooksQuery } from "@/modules/main/bookApi";
import { generatePath, useNavigate } from "react-router-dom";
import { MainRouteEnum } from "@/modules/main/route";

type SearchParams = {
  query: string;
  page: string;
};

const PER_PAGE = 20;

const CardList: FC = () => {
  const navigate = useNavigate();

  const { getParam, setParam } = useSearchParam<SearchParams>();
  const query = getParam("query");
  const page = Number(getParam("page")) || 0;

  const { data: books } = useFetchAllBooksQuery(
    {
      query: query as string,
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
        {books?.items.map((item) => (
          <Card
            book={item}
            key={item.id}
            onClick={() => handleCardClick(item.id)}
          />
        ))}
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
