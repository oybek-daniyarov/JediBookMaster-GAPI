import { EndpointBuilderType, RequestMethodEnum, TagEnum } from "../../../core";
import {
  RequestType,
  ResponseType,
} from "@/modules/main/repo/fetch-all-books/types.ts";

function fetchAllBooksRepo(builder: EndpointBuilderType) {
  return builder.query<ResponseType, RequestType>({
    providesTags: (result) =>
      result?.items
        ? result?.items.map(({ id }) => ({ type: TagEnum.BOOK, id }))
        : [],
    query: ({
      pagination = { startIndex: 0, maxResults: 10 },
      query,
      queryKey,
      projection,
      filter,
      orderBy = "relevance",
      printType,
    }) => {
      return {
        url: `/volumes`,
        method: RequestMethodEnum.GET,
        params: {
          ...(queryKey ? { q: `${query}+${query}:keyes` } : { q: query }),
          startIndex: pagination?.startIndex,
          maxResults: pagination?.maxResults,
          projection,
          filter,
          printType,
          sortBy: orderBy,
          key: import.meta.env.VITE_GOOGLE_BOOKS_API_KEY,
        },
      };
    },
  });
}

export { fetchAllBooksRepo };
