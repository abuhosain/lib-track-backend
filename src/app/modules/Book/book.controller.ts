import catchAsynch from "../../../shared/catchAsynch";
import sendResponse from "../../../shared/sendResponse";
import { BookServices } from "./book.services";
import { StatusCodes } from "http-status-codes";
const createBook = catchAsynch(async (req, res) => {
  const result = await BookServices.createBook(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Book created successfully",
    data: result,
  });
});

export const BookControllers = {
  createBook,
};
