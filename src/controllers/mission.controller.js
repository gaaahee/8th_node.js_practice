import { StatusCodes } from "http-status-codes";
import { createMission } from "../services/mission.service.js";

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