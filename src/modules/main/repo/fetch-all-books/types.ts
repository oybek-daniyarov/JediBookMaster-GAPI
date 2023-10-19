import {
  FilterEnum,
  OrderByEnum,
  PrintTypeEnum,
  ProjectionEnum,
  QueryKeyEnum,
} from "./query.enum.ts";
import { BookItem } from "../google-api-types.ts";

type QueryKeyType = keyof typeof QueryKeyEnum;
type FilterType = keyof typeof FilterEnum;
type ProjectionType = keyof typeof ProjectionEnum;
type OrderByType = keyof typeof OrderByEnum;
type PrintTypeType = keyof typeof PrintTypeEnum;

type RequestType = {
  query: string;
  queryKey?: QueryKeyType;
  orderBy?: OrderByType;
  filter?: FilterType;
  pagination?: {
    startIndex?: number;
    maxResults: number;
  };
  projection?: ProjectionType;
  printType?: PrintTypeType;
};

type ResponseType = {
  kind: string;
  totalItems: number;
  items: BookItem[];
};

export type { RequestType, ResponseType };
