import {
  EndpointBuilderType,
  RequestMethodEnum,
  TagEnum,
} from "@/modules/main";

export const fetchAllBooksRepo = (builder: EndpointBuilderType) =>
  builder.query<undefined, void>({
    providesTags: [
      {
        type: TagEnum.BOOK,
        id: "LIST",
      },
    ],
    query: () => ({
      url: `/volumes`,
      method: RequestMethodEnum.GET,
      params: {
        q: "ai",
        key: import.meta.env.VITE_GOOGLE_BOOKS_API_KEY,
      },
    }),
  });
