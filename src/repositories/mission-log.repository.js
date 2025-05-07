import { prisma } from "../db.config.js";

// 미션 존재 여부 확인
export const findMissionById = async (missionId) => {
  try {
    const mission = await prisma.mission.findUnique({
      where: { id: parseInt(missionId) },
    });
    return mission;
  } catch (error) {
    console.error("Error in findMissionById:", error);
    throw error;
  }
};

// 이미 진행 중인 미션인지 미션로그에서 확인
export const checkExistingMissionLog = async (userId, missionId) => {
  try {
    const existingLog = await prisma.missionLog.findFirst({
      where: {
        user_id: userId,
        mission_id: parseInt(missionId),
        status: 'in_progress',
      },
    });
    return existingLog !== null; // missionlog에 존재하면 true, 없으면 false 반환
  } catch (error) {
    console.error("Error in checkExistingMissionLog:", error);
    throw error;
  }
};

export const createMissionLog = async (userId, missionId) => {
  try {    
    const newMissionLog = await prisma.missionLog.create({
      data: {
        user_id: userId,
        mission_id: parseInt(missionId),
        status: 'in_progress',
      },
    });
    return newMissionLog.id;
  } catch (err) {
    console.error("Error in createMissionLog:", err);
    throw err;
  }
};