import { baseApi } from "../core";
import { fetchAllBooksRepo } from "@/modules/main/repo";

export const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllBooks: fetchAllBooksRepo(builder),
  }),
});

export const { useFetchAllBooksQuery } = bookApi;
