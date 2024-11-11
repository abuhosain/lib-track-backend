import { Book } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

// create book
const createBook = async (payload: Book) => {
  const result = await prisma.book.create({
    data: payload,
  });
  return result;
};

// get book
const getAllBooks = async () => {
  const result = await prisma.book.findMany();
  return result;
};

export const BookServices = {
  createBook,
  getAllBooks,
};
