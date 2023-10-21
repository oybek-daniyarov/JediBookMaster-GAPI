import {
  FilterEnum,
  OrderByEnum,
  PrintTypeEnum,
  ProjectionEnum,
  QueryKeyEnum,
} from "./query.enum";
import { Book, BookItem } from "../google-api-types";

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
    page?: number;
    perPage: number;
  };
  projection?: ProjectionType;
  printType?: PrintTypeType;
};

type ContractResponseType = {
  kind: string;
  totalItems: number;
  items: BookItem[];
};

type ResponseType = {
  items: Array<Book>;
  total: number;
};

export type { RequestType, ContractResponseType, ResponseType };
