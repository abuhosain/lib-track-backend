import { StatusCodes } from "http-status-codes";
import catchAsynch from "../../../shared/catchAsynch";
import sendResponse from "../../../shared/sendResponse";
import { BorrowServices } from "./borrow.services";

const createBorrow = catchAsynch(async (req, res) => {
  const result = await BorrowServices.createBorrow(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Book borrowed successfully",
    data: result,
  });
});

export const BorrowControllers = {
  createBorrow,
};
