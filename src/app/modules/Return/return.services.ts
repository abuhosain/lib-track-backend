import { prisma } from "../../../shared/prisma";

const returnBook = async (borrowId: string) => {
  const borrowRecord = await prisma.borrowRecord.findUnique({
    where: { borrowId },
  });

  if (!borrowRecord) {
    throw new Error("Borrow record not found");
  }

  if (borrowRecord.returnDate) {
    throw new Error("This book has already been returned");
  }

  const updatedBorrowRecord = await prisma.borrowRecord.update({
    where: { borrowId },
    data: { returnDate: new Date() },
  });

  // Increase the availableCopies in the Book model
  await prisma.book.update({
    where: { bookId: borrowRecord.bookId },
    data: {
      availableCopies: {
        increment: 1,
      },
    },
  });

  return updatedBorrowRecord;
};

export const ReturnServices = {
  returnBook,
};
