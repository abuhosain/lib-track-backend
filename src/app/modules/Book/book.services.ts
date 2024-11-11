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

// get book by id
const getBookById = async (id: string) => {
  const result = await prisma.book.findUniqueOrThrow({
    where: {
      bookId: id,
    },
  });
  return result;
};

const updateBookIntoDb = async (
  id: string,
  data: Partial<Book>
): Promise<Book> => {
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId: id,
    },
  });
  const result = await prisma.book.update({
    where: {
      bookId: id,
    },
    data,
  });
  return result;
};

export const BookServices = {
  createBook,
  getAllBooks,
  getBookById,
  updateBookIntoDb,
};
