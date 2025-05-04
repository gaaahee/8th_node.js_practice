import { StatusCodes } from "http-status-codes";
import { challengeMission } from "../services/mission-log.service.js";
import { bodyToMissionChallenge } from "../dtos/mission-log.dto.js";

export const handleChallengeMission = async (req, res) => {
  const missionId = req.params.missionId;
  
  try {
    const result = await challengeMission(
      missionId, 
      bodyToMissionChallenge(req.body)
    );
    
    return res.status(StatusCodes.CREATED).json(result);
    
  } catch (error) {
    console.error("미션 도전 실패:", error);

    if (error.message === "존재하지 않는 미션입니다.") {
      return res.status(StatusCodes.NOT_FOUND).json({ error: error.message });
    }
    
    if (error.message === "이미 도전 중인 미션입니다.") {
      return res.status(StatusCodes.CONFLICT).json({ error: error.message });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ 
      error: "미션 도전에 실패했습니다." 
    });
  }
};