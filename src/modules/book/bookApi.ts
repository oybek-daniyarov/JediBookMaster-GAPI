import { baseApi } from "../main";
import { fetchAllBooksRepo } from "@/modules/book/repo";

export const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllBooks: fetchAllBooksRepo(builder),
  }),
});

export const { useFetchAllBooksQuery } = bookApi;
