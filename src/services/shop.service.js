import { findRegionById, addShop } from "../repositories/shop.repository.js";
import { bodyToShop } from "../dtos/shop.dto.js";

export const createShop = async (regionId, shopBody) => {
  // 1. 지역 존재 여부 확인
  const regionExists = await findRegionById(regionId);
  if (!regionExists) {
    throw new Error("존재하지 않는 지역입니다.");
  }

  // 2. 가게 추가
  const shopId = await addShop(regionId, bodyToShop(shopBody));
  return shopId;
};