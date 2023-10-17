import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TagValues } from "./tag.enum.ts";

const baseUrl = import.meta.env.VITE_API_BASE_URL satisfies string;

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: () => ({}),
  tagTypes: TagValues,
});
