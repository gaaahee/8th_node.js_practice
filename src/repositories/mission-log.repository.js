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

// 내가 진행 중인 미션 목록 조회
export const getInProgressMissionsByUserId = async (userId, cursor) => {
  const take = 10; // 한 번에 가져올 미션 개수
  try {
    const missionLogs = await prisma.missionLog.findMany({
      where: {
        user_id: parseInt(userId),
        status: 'inProgress', // 실제 DB 값과 일치해야 함
        ...(cursor && { id: { lt: parseInt(cursor) } }), // missionLog의 id를 기준으로 페이징
      },
      select: {
        id: true, // MissionLog ID
        created_at: true, // MissionLog 생성일은 해당 미션 도전 시작일
        completed_at: true, // 미션 완료일
        mission: {
          select: {
            id: true,
            description: true,
            point: true,
            due_date: true,
            shop: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
      orderBy: { id: "desc" },
      take: take,
    });
    return missionLogs;
  } catch (error) {
    console.error("Error in getInProgressMissionsByUserId:", error);
    throw error;
  }
};