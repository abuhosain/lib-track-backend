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

const getAllMembers = catchAsynch(async (req, res) => {
  const result = await MemberServices.getAllMembers();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Members retrieved successfully",
    data: result,
  });
});

const getMemberById = catchAsynch(async (req, res) => {
  const { memberId } = req.params;
  const result = await MemberServices.getMemberById(memberId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Member retrieved successfully",
    data: result,
  });
});

const updateMemberIntoDb = catchAsynch(async (req, res) => {
  const { memberId } = req.params;
  const updatedData = req.body;
  const result = await MemberServices.updateMemberIntoDb(memberId, updatedData);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Member updated successfully",
    data: result,
  });
});

export const MemberControllers = {
  createMember,
  getAllMembers,
  getMemberById,
  updateMemberIntoDb,
};
