import { z } from "zod";

export const createTourZodSchema = z.object({
  name: z.string().min(1).max(255),
  durationHours: z.number().positive(),
  ratingAverage: z.number().default(0),
  ratingQuantity: z.number().default(0),
  price: z.number().positive(),
  availableSeats: z.number().positive(),
  imageCover: z.string(),
  images: z.array(z.string()),
  createdAt: z.string(),
  startDates: z.array(z.string()),
  startLocation: z.string().min(1).max(255),
  locations: z.array(z.string().min(1).max(255)),
  slug: z.string().optional(),
});
