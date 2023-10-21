import { EndpointBuilderType } from "@/modules/core";
import { ResponseType } from "./types";
import { Book } from "@/modules/main/repo/google-api-types";

function fetchBookByIdRepo(builder: EndpointBuilderType) {
  return builder.query<Book, string>({
    query: (id: string) => ({
      url: `/volumes/${id}`,
      params: {
        key: import.meta.env.VITE_GOOGLE_BOOKS_API_KEY,
      },
    }),
    transformResponse: (data: ResponseType): Book => ({
      id: data.id,
      title: data.volumeInfo.title,
      subtitle: data.volumeInfo.subtitle,
      authors: data.volumeInfo.authors,
      publisher: data.volumeInfo.publisher,
      publishedDate: data.volumeInfo.publishedDate,
      description: data.volumeInfo.description,
      isbn: data.volumeInfo.industryIdentifiers,
      images: data.volumeInfo.imageLinks,
      language: data.volumeInfo.language,
      previewLink: data.volumeInfo.previewLink,
      infoLink: data.volumeInfo.infoLink,
      saleability: data.saleInfo.saleability,
      isEbook: data.saleInfo.isEbook,
    }),
  });
}

export { fetchBookByIdRepo };
