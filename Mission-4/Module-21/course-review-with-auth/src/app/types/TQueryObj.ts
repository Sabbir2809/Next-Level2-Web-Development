export type TQueryObj = {
  [key: string]: unknown;
  page?: string;
  limit?: string;
  sortBy?: string;
  sortOrder?: string;
  minPrice?: string;
  maxPrice?: string;
  fields?: string;
};
