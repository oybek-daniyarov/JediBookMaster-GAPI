import { Skeleton } from "@/components/ui/skeleton";
import { ImageContainer } from "@/modules/main/components";
import { FC } from "react";

type Props = {
  length?: number;
};
const CardListLoading: FC<Props> = ({ length = 8 }) => {
  return Array.from({ length }).map((_, index) => (
    <div
      className="space-y-3 relative cursor-pointer rounded-lg border  shadow-sm"
      key={index}
    >
      <ImageContainer>
        <Skeleton className="h-24 w-24 rounded-full" />
      </ImageContainer>
      <div className="space-y-2 text-sm pt-0 p-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-2 w-full" />
      </div>
    </div>
  ));
};

export { CardListLoading };
