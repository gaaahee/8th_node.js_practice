import { bodyToMission } from "../dtos/mission.dto.js";
import { findShopById, addMission } from "../repositories/mission.repository.js";

export const createMission = async (shopId, missionBody) => {
  // 1. 가게 존재 여부 확인
  const shopExists = await findShopById(shopId);
  if (!shopExists) {
    throw new Error("존재하지 않는 가게입니다.");
  }
  
  // 2. DTO 변환
  const missionData = bodyToMission(missionBody);
  
  // 3. 미션 추가
  const missionId = await addMission(shopId, missionData);
  
  return missionId;
};