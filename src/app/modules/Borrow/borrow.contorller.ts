import { StatusCodes } from "http-status-codes";
import catchAsynch from "../../../shared/catchAsynch";
import sendResponse from "../../../shared/sendResponse";
import { BorrowServices } from "./borrow.services";

const createBorrow = catchAsynch(async (req, res) => {
  const result = await BorrowServices.createBorrow(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Book borrowed successfully",
    data: result,
  });
});

const getOverdueBorrows = catchAsynch(async (req, res) => {
  const result = await BorrowServices.getOverdueBorrows();
  if (result.length === 0) {
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "No overdue books",
      data: [],
    });
  } else {
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "Overdue borrow list fetched",
      data: result,
    });
  }
});

export const BorrowControllers = {
  createBorrow,
  getOverdueBorrows,
};
