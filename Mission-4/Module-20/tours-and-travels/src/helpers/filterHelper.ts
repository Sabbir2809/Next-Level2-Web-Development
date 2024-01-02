import { Query } from "mongoose";
import { TQueryObj } from "../types/TQueryObj";

export const filter = <T>(modelQuery: Query<T[], T>, queryObj: TQueryObj) => {
  // reserved keywords for filtering
  const excludedFields = ["page", "searchTerm", "sortBy", "limit", "sortOrder", "fields"];
  // delete keyword
  excludedFields.forEach((keyword) => delete queryObj[keyword]);
  modelQuery = modelQuery.find(queryObj);
  return modelQuery;
};
