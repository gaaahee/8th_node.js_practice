import { bodyToReview, responseFromReview } from "../dtos/review.dto.js";
import { findShopById, addReview } from "../repositories/review.repository.js";

export const createReview = async (shopId, reviewBody) => {
  // 1. 가게 존재 여부 확인
  const shopExists = await findShopById(shopId);
  if (!shopExists) {
    throw new Error("존재하지 않는 가게입니다.");
  }
  
  const reviewData = bodyToReview(reviewBody);
  
  // 2. 리뷰 추가
  const review = await addReview(shopId, reviewData);
  
  return responseFromReview(review);
};