import { Query } from "mongoose";
import { ICourse } from "../modules/course/course.interface";
import { TQueryObj } from "../types/TQueryObj";

export const filter = (modelQuery: Query<ICourse[], ICourse>, query: TQueryObj) => {
  const queryObj = { ...query };
  const excludeFields = ["page", "limit", "sortBy", "sortOrder", "minPrice", "maxPrice"];
  excludeFields.forEach((keyword) => delete queryObj[keyword]);

  modelQuery = modelQuery.find(queryObj);
  return modelQuery;
};
