import { Model, Schema } from "mongoose";

interface IReview {
  review: string;
  rating: number;
  createdAt: Date;
  tour: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
}

interface IREviewModel extends Model<IReview> {
  calculateAverageRating(tourId: Schema.Types.ObjectId): Promise<void>;
}

export { IREviewModel, IReview };
