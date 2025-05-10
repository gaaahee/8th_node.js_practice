import { prisma } from "../db.config.js";

// 가게 존재 여부 확인
export const findShopById = async (shopId) => {
  try {
    const shop = await prisma.shop.findUnique({
      where: { id: parseInt(shopId) },
    });
    return shop;
  } catch (error) {
    console.error("Error in findShopById (mission.repository):", error);
    throw error;
  }
};

// 미션 추가
export const addMission = async (shopId, missionData) => {
  try {    
    const newMission = await prisma.mission.create({
      data: {
        shop_id: parseInt(shopId),
        description: missionData.description,
        point: missionData.point,
        due_date: new Date(missionData.dueDate),
      },
    });
    return newMission.id;
  } catch (err) {
    console.error("Error in addMission:", err);
    throw err;
  }
};

// 특정 가게의 모든 미션 조회
export const getMissionsByShopId = async (shopId, cursor) => {
  const take = 10; // 한 번에 가져올 미션 개수
  try {
    const missions = await prisma.mission.findMany({
      where: {
        shop_id: parseInt(shopId),
        ...(cursor && { id: { lt: parseInt(cursor) } }),
      },
      select: {
        id: true,
        description: true,
        point: true,
        due_date: true,
        created_at: true,
        updated_at: true,
      },
      orderBy: { id: "desc" },
      take: take,
    });
    return missions;
  } catch (error) {
    console.error("Error in getMissionsByShopId:", error);
    throw error;
  }
};