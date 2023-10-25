import { Icons } from "@/components/ui/icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FC } from "react";

type Props = {
  className?: string;
};
const CardListNotFound: FC<Props> = ({ className }) => {
  return (
    <Alert className={className} variant="destructive">
      <Icons.Alert className="h-4 w-4" />
      <AlertTitle>Sorry!</AlertTitle>
      <AlertDescription>No books found for your search query</AlertDescription>
    </Alert>
  );
};

export { CardListNotFound };
