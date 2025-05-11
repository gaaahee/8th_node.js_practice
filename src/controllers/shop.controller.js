import { createShop, listShopReviews } from "../services/shop.service.js";
import { StatusCodes } from "http-status-codes";

export const handleCreateShop = async (req, res, next) => {
  const regionId = req.params.regionId;
  
  try {
    const shopId = await createShop(regionId, req.body);
    return res.status(StatusCodes.CREATED).success({ shopId }); // 성공 응답을 res.success()로 처리
  } catch (error) {
    next(error);
  }
};

export const handleListShopReviews = async (req, res, next) => {
  try {
    const { shopId } = req.params;
    const { cursor } = req.query;

    const reviews = await listShopReviews(
      shopId, cursor // shopId와 cursor를 shop.service.js로 전달
    );
    res.status(StatusCodes.OK).success(reviews);
  } catch (error) {
    next(error);
  }
};