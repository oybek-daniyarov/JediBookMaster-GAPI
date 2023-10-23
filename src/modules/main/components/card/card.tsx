import { Book } from "@/modules/main/repo/google-api-types";
import { FC } from "react";
import { cn } from "@/lib/utils";
import { Image } from "@/components/image";
import { ImageContainer } from "@/modules/main/components";
import { getBookImage } from "@/modules/main/lib";

type Props = {
  className?: string;
  book: Book;
  onClick?: () => void;
};

const Card: FC<Props> = ({ className, onClick, book }) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "space-y-3 cursor-pointer rounded-lg border  shadow-sm ",
        className
      )}
    >
      <div>
        <ImageContainer>
          <Image
            className="transition-all hover:scale-105"
            src={getBookImage(book.images)}
            alt={book.title}
          />
        </ImageContainer>
      </div>
      <div className="space-y-1 text-sm pt-0 p-4">
        <h3 className="font-medium leading-none">{book.title}</h3>
        <p className="text-xs text-muted-foreground">{book.publisher}</p>
      </div>
    </div>
  );
};

export { Card };
