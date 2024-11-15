import express from "express";
import { MemberControllers } from "./member.controller";

const router = express.Router();

router.post("/", MemberControllers.createMember);
router.get("/", MemberControllers.getAllMembers);
router.get("/:memberId", MemberControllers.getMemberById);
router.put("/:memberId", MemberControllers.updateMemberIntoDb);
router.delete("/:memberId", MemberControllers.deleteMemberFromDb);

export const MemberRoutes = router;
