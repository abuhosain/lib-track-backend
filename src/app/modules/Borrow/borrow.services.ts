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

const getOverdueBorrows = async () => {
  const fourteenDaysAgo = new Date();
  fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);

  const overdueBorrows = await prisma.borrowRecord.findMany({
    where: {
      returnDate: null,
      borrowDate: {
        lt: fourteenDaysAgo,
      },
    },
    include: {
      book: {
        select: {
          title: true,
        },
      },
      member: {
        select: {
          name: true,
        },
      },
    },
  });

  // Map data to the required response format
  const overdueList = overdueBorrows.map((record) => {
    const overdueDays =
      Math.floor(
        (new Date().getTime() - new Date(record.borrowDate).getTime()) /
          (1000 * 60 * 60 * 24)
      ) - 14;

    return {
      borrowId: record.borrowId,
      bookTitle: record.book.title,
      borrowerName: record.member.name,
      overdueDays,
    };
  });

  return overdueList;
};

export const BorrowServices = {
  createBorrow,
  getOverdueBorrows,
};
