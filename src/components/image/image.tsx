import { FC, useEffect, useState } from "react";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface ImageProps {
  src?: string;
  alt?: string;
  className?: string;
}

const Spinner = () => {
  return (
    <div>
      {<Icons.Spinner className="h-8 w-8 animate-spin accent-primary" />}
    </div>
  );
};

const FallBack = () => {
  return (
    <div>
      <Icons.Image className="h-8 w-8 text-gray-300" />
    </div>
  );
};

const Image: FC<ImageProps> = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<boolean>(false);

  const handleError = () => {
    setIsError(true);
    setIsLoading(false);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleLoad = () => {
    setIsLoading(false);
    setIsError(false);
  };

  useEffect(() => {
    if (!src) {
      handleError();
    }
  }, [handleLoad, src]);

  return (
    <>
      {isLoading && <Spinner />}
      {isError && <FallBack />}
      <img
        onLoad={handleLoad}
        onError={handleError}
        src={src}
        alt={alt}
        className={cn(
          "w-full  rounded-md object-cover aspect-[3/4]",
          {
            hidden: isLoading || isError,
            "animate-fade-in": !isLoading && !isError,
          },
          className
        )}
      />
    </>
  );
};

export { Image };
