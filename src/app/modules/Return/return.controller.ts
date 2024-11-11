import { StatusCodes } from "http-status-codes";
import catchAsynch from "../../../shared/catchAsynch";
import sendResponse from "../../../shared/sendResponse";
import { ReturnServices } from "./return.services";

const returnBook = catchAsynch(async (req, res) => {
  const { borrowId } = req.body;
  await ReturnServices.returnBook(borrowId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Book returned successfully",
  });
});

export const ReturnController = {
  returnBook,
};
