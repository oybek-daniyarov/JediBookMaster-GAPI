import {
  EndpointBuilderType,
  RequestMethodEnum,
  TagEnum,
} from "@/modules/core";
import { ContractResponseType, RequestType, ResponseType } from "./types";

function fetchAllBooksRepo(builder: EndpointBuilderType) {
  return builder.query<ResponseType, RequestType>({
    providesTags: (result) =>
      result?.items
        ? result?.items.map(({ id }) => ({ type: TagEnum.BOOK, id }))
        : [],
    query: ({
      pagination = { page: 0, perPage: 10 },
      query,
      queryKey,
      queryValue,
      projection,
      filter,
      orderBy = "relevance",
      printType,
    }) => ({
      url: `/volumes`,
      method: RequestMethodEnum.GET,
      params: {
        ...(queryKey && queryValue
          ? { q: `${query}+${queryKey}:${queryValue}` }
          : { q: query }),
        startIndex: pagination?.page,
        maxResults: pagination?.perPage,
        projection,
        filter,
        printType,
        sortBy: orderBy,
        key: import.meta.env.VITE_GOOGLE_BOOKS_API_KEY,
      },
    }),
    transformResponse: (response: ContractResponseType): ResponseType => {
      return {
        total: response.totalItems,
        items:
          response?.items?.map((data) => ({
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
            searchText: data.searchInfo?.textSnippet,
          })) ?? [],
      };
    },
  });
}

export { fetchAllBooksRepo };
