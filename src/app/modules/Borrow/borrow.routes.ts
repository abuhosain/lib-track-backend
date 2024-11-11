import express from "express";
import { BorrowControllers } from "./borrow.contorller";

const router = express.Router();

router.post("/", BorrowControllers.createBorrow);

export const BorrowRoutes = router;
