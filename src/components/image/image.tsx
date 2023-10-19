import { FC, ImgHTMLAttributes } from "react";
import { ImageIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils.ts";

type Props = ImgHTMLAttributes<HTMLImageElement>;
const Image: FC<Props> = ({ src, alt, className, ...props }) => {
  if (!src) return <FallBackImage className={className} />;
  return <img src={src} alt={alt} className={className} {...props} />;
};

type FallBackImageProps = {
  className?: string;
};

const FallBackImage: FC<FallBackImageProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center  bg-gray-100 w-full min-h-[40px]",
        className
      )}
    >
      <ImageIcon />
    </div>
  );
};

export { Image };
