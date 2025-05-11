import { bodyToReview, responseFromReview, responseMyReviews } from "../dtos/review.dto.js";
import { findShopById, addReview, getMyReviewsByUserId } from "../repositories/review.repository.js";
import { NotFoundError, ValidationError } from "../errors.js";

// 리뷰 작성
export const createReview = async (shopId, reviewBody) => {
  // 1. 가게 존재 여부 확인
  const shopExists = await findShopById(shopId);
  if (!shopExists) {
    throw new NotFoundError("가게를", "존재하지 않는 가게입니다.", { shopId });
  }
  
  const reviewData = bodyToReview(reviewBody);
  
  // 2. 리뷰 추가
  const review = await addReview(shopId, reviewData);
  
  return responseFromReview(review);
};

// 내가 작성한 리뷰 목록 조회
export const listMyReviews = async (userId, cursor) => {
  if (!userId) {
    throw new ValidationError("사용자 ID가 필요합니다.");
  }
  const reviews = await getMyReviewsByUserId(parseInt(userId), cursor ? parseInt(cursor) : undefined);
  return responseMyReviews(reviews);
};