import { IGif } from "./i-gif.interface";
import { IMeta } from "./i-meta.interface";
import { IPagination } from "./i-pagination.interface";

export interface IGifData {
  data: IGif[];
  pagination: IPagination;
  meta: IMeta;
}