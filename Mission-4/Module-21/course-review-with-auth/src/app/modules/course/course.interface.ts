import { Types } from "mongoose";

export type TTags = {
  name: string;
  isDeleted: boolean;
};
export type TDetails = {
  level: string;
  description: string;
};

export interface ICourse {
  title: string;
  instructor: string;
  categoryId: Types.ObjectId;
  price: number;
  tags: TTags[];
  startDate: string;
  endDate: string;
  language: string;
  provider: string;
  details: TDetails;
  createdBy: Types.ObjectId;
}
