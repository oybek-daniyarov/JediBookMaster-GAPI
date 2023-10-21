type Props = {
  total: number;
  limit: number;
  page: number;
};

const usePaginate = ({ total = 0, limit = 20, page = 1 }: Props) => {
  const validPage = Math.max(1, Math.min(page, Math.ceil(total / limit)));

  const totalPages = Math.ceil(total / limit);
  const hasPrevPage = validPage > 1;
  const hasNextPage = validPage < totalPages;
  const nextPage = hasNextPage ? validPage + 1 : validPage;
  const prevPage = hasPrevPage ? validPage - 1 : validPage;

  return {
    totalPages,
    hasPrevPage,
    hasNextPage,
    nextPage,
    prevPage,
  };
};

export { usePaginate };
