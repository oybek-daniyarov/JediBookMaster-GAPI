import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";
import { TagEnum } from "@/modules/core";

type EndpointBuilderType = EndpointBuilder<
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

type RequestMethodType = "GET" | "POST" | "PUT" | "DELETE";

export type { EndpointBuilderType, RequestMethodType };
