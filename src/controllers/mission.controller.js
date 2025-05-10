import { StatusCodes } from "http-status-codes";
import { createMission, listMissionsForShop } from "../services/mission.service.js";

export const handleCreateMission = async (req, res) => {
  const shopId = req.params.shopId;
  
  try {
    const missionId = await createMission(shopId, req.body);
    return res.status(StatusCodes.CREATED).json({ missionId });
  } catch (error) {
    console.error("미션 추가 에러:", error);
    
    if (error.message === "존재하지 않는 가게입니다.") {
      return res.status(StatusCodes.NOT_FOUND).json({ error: error.message });
    }
    
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

// 특정 가게의 미션 목록 조회
export const handleListMissionsForShop = async (req, res, next) => {
  try {
    const { shopId } = req.params;
    const { cursor } = req.query;

    const missionData = await listMissionsForShop(shopId, cursor);
    
    return res.status(StatusCodes.OK).json(missionData);
  } catch (error) {
    console.error("특정 가게 미션 목록 조회 에러:", error);
    // 서비스에서 설정한 status 코드가 있다면 사용, 없다면 기본값 사용
    const statusCode = error.status || StatusCodes.INTERNAL_SERVER_ERROR;
    const errorMessage = error.message || "서버 내부 오류가 발생했습니다.";
    
    return res.status(statusCode).json({ error: errorMessage });
  }
};