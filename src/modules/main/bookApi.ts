import { baseApi } from "../core";
import { fetchAllBooksRepo, fetchBookByIdRepo } from "@/modules/main/repo";

export const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllBooks: fetchAllBooksRepo(builder),
    fetchBookById: fetchBookByIdRepo(builder),
  }),
});

export const {
  useFetchAllBooksQuery,
  useLazyFetchAllBooksQuery,
  useFetchBookByIdQuery,
} = bookApi;
