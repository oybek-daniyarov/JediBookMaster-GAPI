import { EndpointBuilderType } from "@/modules/core";
import { ResponseType } from "./types.ts";

function fetchBookByIdRepo(builder: EndpointBuilderType) {
  return builder.query<ResponseType, string>({
    query: (id: string) => ({
      url: `/volumes/${id}`,
      params: {
        key: import.meta.env.VITE_GOOGLE_BOOKS_API_KEY,
      },
    }),
  });
}

export { fetchBookByIdRepo };
