import { Response } from "express";

type TData<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  data: T | T[] | null;
};

const sendResponse = <T>(res: Response, data: TData<T>) => {
  res.status(data?.statusCode).json({
    success: true,
    statusCode: data.statusCode,
    message: data.message,
    data: data.data,
  });
};
export default sendResponse;
