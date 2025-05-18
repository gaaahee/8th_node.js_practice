import { StatusCodes } from "http-status-codes";
import { createMission, listMissionsForShop } from "../services/mission.service.js";

export const handleCreateMission = async (req, res, next) => {
  const shopId = req.params.shopId;
  try {
    const missionId = await createMission(shopId, req.body);
    return res.status(StatusCodes.CREATED).success({ missionId });
  } catch (error) {
    next(error);
  }
};

// 특정 가게의 미션 목록 조회
export const handleListMissionsForShop = async (req, res, next) => {
  try {
    const { shopId } = req.params;
    const { cursor } = req.query;

    const missionData = await listMissionsForShop(shopId, cursor);
    return res.status(StatusCodes.OK).success(missionData);
  } catch (error) {
    next(error);
  }
};