type Props = {
  total?: number;
  perPage?: number;
  page?: number;
  onPageChange?: (page: number) => void;
};

const usePaginate = ({
  total = 0,
  perPage = 20,
  page = 0,
  onPageChange,
}: Props) => {
  const totalPages = Math.ceil(total / perPage);

  // Ensure the page is within valid range
  const validPage = Math.max(0, Math.min(page, totalPages - 1));

  const hasPrevPage = validPage > 0;
  const hasNextPage = validPage < totalPages - 1;
  const nextPage = hasNextPage ? validPage + 1 : validPage;
  const prevPage = hasPrevPage ? validPage - 1 : validPage;
  const startItem = validPage * perPage + 1;
  const endItem = Math.min((validPage + 1) * perPage, total);

  const onPrevPage = () => {
    onPageChange?.(prevPage);
  };

  const onNextPage = () => {
    onPageChange?.(nextPage);
  };

  return {
    totalPages,
    hasPrevPage,
    hasNextPage,
    onNextPage,
    onPrevPage,
    startItem,
    endItem,
  };
};

export { usePaginate };
