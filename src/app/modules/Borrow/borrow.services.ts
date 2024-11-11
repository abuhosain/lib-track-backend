import { BorrowRecord } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const createBorrow = async (payload: BorrowRecord) => {
  const { bookId, memberId } = payload;
  const book = await prisma.book.findUnique({
    where: { bookId },
  });

  if (!book) {
    throw new Error("Book not found");
  }

  if (book.availableCopies <= 0) {
    throw new Error("No copies available for borrowing");
  }
  const result = await prisma.borrowRecord.create({
    data: {
      bookId,
      memberId,
      borrowDate: new Date(),
    },
  });
  return result;
};

export const BorrowServices = {
  createBorrow,
};
