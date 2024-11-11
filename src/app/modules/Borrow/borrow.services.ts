import { BorrowRecord } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const createBorrow = async (payload: BorrowRecord) => {
  const { bookId, memberId } = payload;

  const book = await prisma.book.findUnique({
    where: { bookId },
  });

  if (!book) {
    const error: any = new Error("Invalid book ID");
    error.status = 404;
    throw error;
  }

  if (book.availableCopies <= 0) {
    const error: any = new Error("No available copies");
    error.status = 400;
    throw error;
  }

  // Create the borrow record
  const borrowRecord = await prisma.borrowRecord.create({
    data: {
      bookId,
      memberId,
      borrowDate: new Date(),
    },
  });

  //  decreament
  await prisma.book.update({
    where: { bookId },
    data: {
      availableCopies: {
        decrement: 1,
      },
    },
  });

  return borrowRecord;
};

export const BorrowServices = {
  createBorrow,
};
