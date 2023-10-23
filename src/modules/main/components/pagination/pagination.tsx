import { FC } from "react";
import { Button } from "@/components/ui/button.tsx";
import { usePaginate } from "@/modules/core/hooks";

type Props = {
  total: number;
  perPage: number;
  page: number;
  onChange: (page: number) => void;
};

const Pagination: FC<Props> = ({ total, page, perPage, onChange }) => {
  const {
    onPrevPage,
    onNextPage,
    hasPrevPage,
    hasNextPage,
    startItem,
    endItem,
  } = usePaginate({
    total,
    page,
    perPage,
    onPageChange: onChange,
  });

  return (
    <div className="sticky bottom-0 flex items-center justify-end space-x-2 py-2 px-4 mt-4 bg-accent rounded-md">
      <div className="flex-1 text-sm text-muted-foreground">
        Page {page} - Displaying items {startItem} to {endItem} of {total}
      </div>
      <div className="space-x-2">
        <Button
          variant="outline"
          size="sm"
          disabled={!hasPrevPage}
          onClick={onPrevPage}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          disabled={!hasNextPage}
          onClick={onNextPage}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export { Pagination };
