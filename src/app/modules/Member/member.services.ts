import { Member } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const createMember = async (payload: Member) => {
  const result = await prisma.member.create({
    data: payload,
  });
  return result;
};

const getAllMembers = async () => {
  const result = await prisma.member.findMany();
  return result;
};

const getMemberById = async (id: string) => {
  const result = await prisma.member.findUniqueOrThrow({
    where: {
      memberId: id,
    },
  });
  return result;
};

const updateMemberIntoDb = async (
  id: string,
  data: Partial<Member>
): Promise<Member> => {
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId: id,
    },
  });
  const result = await prisma.member.update({
    where: {
      memberId: id,
    },
    data,
  });
  return result;
};

const deleteMemberFromDb = async (id: string) => {
  const result = await prisma.member.delete({
    where: {
      memberId: id,
    },
  });
  return result;
};

export const MemberServices = {
  createMember,
  getAllMembers,
  getMemberById,
  updateMemberIntoDb,
  deleteMemberFromDb,
};
