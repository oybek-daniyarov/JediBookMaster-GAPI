import { FC } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};
const CardListEmptyState: FC<Props> = ({ className }) => {
  return (
    <h1 className={cn("text-2xl", className)}>Welcome to the Book Store!</h1>
  );
};

export { CardListEmptyState };
