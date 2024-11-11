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
