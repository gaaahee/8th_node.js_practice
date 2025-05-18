import { bodyToMission, previewShopMissions } from "../dtos/mission.dto.js";
import { findShopById, addMission, getMissionsByShopId } from "../repositories/mission.repository.js";
import { NotFoundError, ValidationError } from "../errors.js";

// 미션 추가
export const createMission = async (shopIdParam, missionBody) => {
  // 1. shopId 유효성 검사
  const shopId = parseInt(shopIdParam);
  if (isNaN(shopId)) {
    throw new ValidationError("유효하지 않은 가게 ID 형식입니다.", { shopId: shopIdParam });
  }

  // 2. 가게 존재 여부 확인
  const shopExists = await findShopById(shopId);
  if (!shopExists) {
    throw new NotFoundError("가게를", "존재하지 않는 가게입니다.", { shopId });
  }

  // 3. DTO 변환
  const missionData = bodyToMission(missionBody);

  // 4. 미션 추가
  const missionId = await addMission(shopId, missionData);

  return missionIdResult;
};

// 특정 가게의 미션 목록 조회
export const listMissionsForShop = async (shopId, cursorQuery) => {
  const shopIdNum = parseInt(shopId);
  if (isNaN(shopIdNum)) {
      throw new ValidationError("유효하지 않은 가게 ID 형식입니다.", { shopId });
  }

  // 1. 가게 존재 여부 확인
  const shop = await findShopById(shopIdNum);
  if (!shop) {
      throw new NotFoundError("가게를", "존재하지 않는 가게입니다.", { shopId: shopIdNum });
  }

 // 2. 커서 유효성 검사
  const cursor = cursorQuery ? parseInt(cursorQuery) : undefined;
  if (cursorQuery && isNaN(cursor)) {
      throw new ValidationError("유효하지 않은 커서 형식입니다.", { cursor: cursorQuery });
  }
  
  // 3. 미션 목록 조회
  const takeCount = 10; // Repository의 take 값과 일치해야 함
  const missions = await getMissionsByShopId(shopIdNum, cursor);

  const hasNext = missions.length === takeCount;
  const nextCursor = hasNext && missions.length > 0 ? missions[missions.length - 1].id : null;

  return {
      missions: previewShopMissions(missions),
      hasNext: hasNext, // 다음 페이지 존재 여부
      nextCursor: nextCursor, // 다음 페이지 커서
  };
};