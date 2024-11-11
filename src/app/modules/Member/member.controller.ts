import { StatusCodes } from "http-status-codes";
import catchAsynch from "../../../shared/catchAsynch";
import sendResponse from "../../../shared/sendResponse";
import { MemberServices } from "./member.services";

const createMember = catchAsynch(async (req, res) => {
  const result = await MemberServices.createMember(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Member created successfully",
    data: result,
  });
});

export const MemberControllers = {
  createMember,
};
