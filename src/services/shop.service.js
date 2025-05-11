import { findRegionById, addShop } from "../repositories/shop.repository.js";
import { getAllShopReviews } from "../repositories/shop.repository.js";
import { responseFromReview } from "../dtos/review.dto.js";
import { bodyToShop } from "../dtos/shop.dto.js";
import { NotFoundError, ValidationError } from "../errors.js";

// 상점 추가
export const createShop = async (regionId, shopBody) => {
  // 1. 지역 존재 여부 확인
  const regionExists = await findRegionById(regionId);
  if (!regionExists) {
    throw new NotFoundError("지역을", "존재하지 않는 지역입니다.", { regionId });
  }

  // 2. 가게 추가
  const shopId = await addShop(regionId, bodyToShop(shopBody));
  return shopId;
};

// 상점 리뷰 목록 조회
export const listShopReviews = async (shopId, cursorQuery) => {
  const shopIdNum = parseInt(shopId);
  if (isNaN(shopIdNum)) {
    throw new ValidationError("유효하지 않은 가게 ID 형식입니다.", { shopId });
  }

  const cursor = cursorQuery ? parseInt(cursorQuery) : undefined;
  if (cursorQuery && isNaN(cursor)) {
    throw new ValidationError("유효하지 않은 커서 형식입니다.", { cursor: cursorQuery });
  }

  const reviews = await getAllShopReviews(shopIdNum, cursor);
  return responseFromReview(reviews);
};