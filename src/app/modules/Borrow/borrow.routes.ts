import express from "express";
import { BorrowControllers } from "./borrow.contorller";

const router = express.Router();

router.post("/", BorrowControllers.createBorrow);
router.get("/overdue", BorrowControllers.getOverdueBorrows);

export const BorrowRoutes = router;
