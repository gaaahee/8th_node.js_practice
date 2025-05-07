import { bodyToReview, responseFromReview, responseMyReviews } from "../dtos/review.dto.js";
import { findShopById, addReview, getMyReviewsByUserId } from "../repositories/review.repository.js";

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

export const listMyReviews = async (userId, cursor) => {
  if (!userId) {
    throw new Error("존재하지 않은 userId 입니다.");
  }
  const reviews = await getMyReviewsByUserId(parseInt(userId), cursor ? parseInt(cursor) : undefined);
  return responseMyReviews(reviews);
};