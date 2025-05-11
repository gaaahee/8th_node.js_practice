import { StatusCodes } from "http-status-codes";
import { challengeMission, listInProgressMissions } from "../services/mission-log.service.js";
import { bodyToMissionChallenge } from "../dtos/mission-log.dto.js";

export const handleChallengeMission = async (req, res, next) => {
  const missionId = req.params.missionId;
  try {
    const result = await challengeMission(
      missionId, 
      bodyToMissionChallenge(req.body)
    );
    return res.status(StatusCodes.CREATED).success(result);
  } catch (error) {
    next(error);
  }
};

// 내가 진행 중인 미션 목록 조회
export const handleListInProgressMissions = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { cursor } = req.query;

    const result = await listInProgressMissions(userId, cursor);
    return res.status(StatusCodes.OK).success(result);
  } catch (error) {
    next(error);
  }
};