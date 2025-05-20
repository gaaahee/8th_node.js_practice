import { findRegionById, addShop, findShopById as findShopByIdRepo, getAllShopReviews } from "../repositories/shop.repository.js"; // findShopByIdRepo 임포트
import { responseShopReviewsList } from "../dtos/review.dto.js";
import { bodyToShop } from "../dtos/shop.dto.js";
import { NotFoundError, ValidationError } from "../errors.js";

// 상점 추가
export const createShop = async (regionIdParam, shopBody) => {
  // 1. regionId 유효성 검사
  const regionId = parseInt(regionIdParam);
  if (isNaN(regionId)) {
    throw new ValidationError("유효하지 않은 지역 ID 형식입니다.", { regionId: regionIdParam });
  }

  // 2. 지역 존재 여부 확인
  const regionExists = await findRegionById(regionId);
  if (!regionExists) {
    throw new NotFoundError("지역을", "존재하지 않는 지역입니다.", { regionId });
  }

  // 3. 가게 추가
  const newShopId = await addShop(regionId, bodyToShop(shopBody));
  return newShopId;
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

  // 가게 존재 여부 확인
  const shopExists = await findShopByIdRepo(shopIdNum);
  if (!shopExists) {
    throw new NotFoundError("가게를", "존재하지 않는 가게입니다.", { shopId: shopIdNum });
  }

  // 리뷰 목록 조회
  const takeCountFromRepo = 5;
  const reviews = await getAllShopReviews(shopIdNum, cursor);
  return responseShopReviewsList(reviews, takeCountFromRepo);
};