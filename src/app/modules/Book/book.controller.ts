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

const getAllBook = catchAsynch(async (req, res) => {
  const result = await BookServices.getAllBooks();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Books retrieved successfully",
    data: result,
  });
});

const getSingleBook = catchAsynch(async (req, res) => {
  const { bookId } = req.params;
  const result = await BookServices.getBookById(bookId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Books retrieved successfully",
    data: result,
  });
});

const updateBookIntoDb = catchAsynch(async (req, res) => {
  const { bookId } = req.params;
  const updatedData = req.body;
  const result = await BookServices.updateBookIntoDb(bookId, updatedData);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book updated successfully",
    data: result,
  });
});

const deleteBookFromDb = catchAsynch(async (req, res) => {
  const { bookId } = req.params;
  await BookServices.deleteBookFromDb(bookId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book successfully deleted",
  });
});

export const BookControllers = {
  createBook,
  getAllBook,
  getSingleBook,
  updateBookIntoDb,
  deleteBookFromDb,
};
