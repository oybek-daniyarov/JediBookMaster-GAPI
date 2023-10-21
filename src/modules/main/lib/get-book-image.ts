import { ImageLinks } from "@/modules/main/repo";

export function getBookImage(images?: ImageLinks) {
  return (
    images?.extraLarge ||
    images?.large ||
    images?.medium ||
    images?.thumbnail ||
    images?.smallThumbnail
  );
}
