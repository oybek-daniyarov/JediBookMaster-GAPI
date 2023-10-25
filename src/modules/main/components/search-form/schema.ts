import * as z from "zod";
import { QueryKeyEnum } from "@/modules/main/repo/fetch-all-books/query.enum";

const formSchema = z
  .object({
    query: z.string().min(1, {
      message: "Search term is required",
    }),
    queryKey: z.nativeEnum(QueryKeyEnum).optional(),
    queryValue: z.string().optional(),
  })
  .refine((data) => !(data.queryKey && !data.queryValue), {
    message: "Filter term is required",
    path: ["queryValue"],
  });

type SearchFormType = z.infer<typeof formSchema> & {
  page?: string;
};

export { formSchema, type SearchFormType };
