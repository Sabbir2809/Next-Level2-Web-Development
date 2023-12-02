import { Schema, model } from "mongoose";
import slugify from "slugify";
import { ITour, ITourMethods, ITourModel } from "../interfaces/tour.interface";

const tourSchema = new Schema<ITour, ITourModel, ITourMethods>(
  {
    name: {
      type: String,
      required: [true, "Please tell us tour name"],
    },
    durationHours: {
      type: Number,
      required: [true, "Please tell us your durationHours"],
    },
    ratingAverage: {
      type: Number,
      default: 0,
    },
    ratingQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Please tell us tour price"],
    },
    imageCover: {
      type: String,
      required: [true, "Please tell us tour imageCover"],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    startDates: [Date],
    startLocation: {
      type: String,
      required: [true, "Please tell us tour startLocation"],
    },
    locations: [String],
    slug: String,
  },
  { versionKey: false, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

tourSchema.virtual("durationDays").get(function () {
  return this.durationHours / 24;
});

tourSchema.virtual("reviews", {
  ref: "Review",
  foreignField: "tour",
  localField: "_id",
});

// In Mongoose, a document is an instance of a Model class. In document middleware functions, this refers to the document. To access the model, use this.constructor.
tourSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// instance methods
tourSchema.methods.getNextNearestStartDateAndEndDate = function (): {
  nearestStartDate: Date | null;
  estimatedEndDate: Date | null;
} {
  const today = new Date();
  const futureDates = this.startDates.filter((startDate: Date) => {
    return startDate > today;
  });
  //   65893905746394 - 4873843278478478

  futureDates.sort((a: Date, b: Date) => a.getTime() - b.getTime());

  const nearestStartDate = futureDates[0];
  const estimatedEndDate = new Date(nearestStartDate.getTime() + this.durationHours * 60 * 60 * 1000);

  return {
    nearestStartDate,
    estimatedEndDate,
  };
};

const Tour = model<ITour, ITourModel>("Tour", tourSchema);
export default Tour;
