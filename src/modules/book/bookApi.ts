import { baseApi } from "@/modules/core";
import { fetchAllBooksRepo } from "@/modules/book/repos";

export const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllBooks: fetchAllBooksRepo(builder),
  }),
});

export const { useFetchAllBooksQuery } = bookApi;
