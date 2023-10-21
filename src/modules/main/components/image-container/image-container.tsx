import { FC } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const ImageContainer: FC<Props> = ({ children, className }) => {
  return (
    <AspectRatio
      ratio={3 / 4}
      className={cn(
        "overflow-hidden flex items-center justify-center first:rounded-md",
        className
      )}
    >
      {children}
    </AspectRatio>
  );
};

export { ImageContainer };
