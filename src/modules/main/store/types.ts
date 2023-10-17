import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";
import { TagEnum } from "@/modules/main";

export type EndpointBuilderType = EndpointBuilder<
  BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError,
    Record<string, unknown>,
    FetchBaseQueryMeta
  >,
  TagEnum,
  "api"
>;

export type RequestMethodType = "GET" | "POST" | "PUT" | "DELETE";
