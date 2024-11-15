import express from "express";
import { BookControllers } from "./book.controller";

const router = express.Router();

router.post("/", BookControllers.createBook);
router.get("/", BookControllers.getAllBook);
router.get("/:bookId", BookControllers.getSingleBook);
router.put("/:bookId", BookControllers.updateBookIntoDb);
router.delete("/:bookId", BookControllers.deleteBookFromDb);

export const BookRoutes = router;
