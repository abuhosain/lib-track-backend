import express from "express";
import { MemberControllers } from "./member.controller";

const router = express.Router();

router.post("/", MemberControllers.createMember);
// router.get("/", BookControllers.getAllBook);
// router.get("/:bookId", BookControllers.getSingleBook);
// router.put("/:bookId", BookControllers.updateBookIntoDb);
// router.delete("/:bookId", BookControllers.deleteBookFromDb);

export const MemberRoutes = router;
