import { bodyToReview, responseFromReview, responseMyReviews } from "../dtos/review.dto.js";
import { findShopById, addReview, getMyReviewsByUserId } from "../repositories/review.repository.js";
import { getUser } from "../repositories/user.repository.js";
import { NotFoundError, ValidationError, AlreadyExistsError } from "../errors.js";
import { Prisma } from "@prisma/client"; // Prisma 에러 처리를 위해 임포트

// 리뷰 작성
export const createReview = async (shopIdParam, reviewBody) => {
  // 1. shopId 유효성 검사
  const shopId = parseInt(shopIdParam);
  if (isNaN(shopId)) {
    throw new ValidationError("유효하지 않은 상점 ID 형식입니다.", { shopId: shopIdParam });
  }

  // 2. 가게 존재 여부 확인
  const shopExists = await findShopById(shopId);
  if (!shopExists) {
    throw new NotFoundError("상점을", "존재하지 않는 상점입니다.", { shopId });
  }

  const reviewData = bodyToReview(reviewBody);

  // 3. reviewData.userId 유효성 검사
  if (reviewData.userId == null || isNaN(parseInt(reviewData.userId))) {
    throw new ValidationError("리뷰 작성자의 ID가 유효하지 않습니다.", { userId: reviewData.userId });
  }

  // 4. 사용자 존재 여부 확인
  const userExists = await getUser(parseInt(reviewData.userId));
  if (!userExists) {
    throw new NotFoundError("사용자를", "리뷰 작성자 ID가 존재하지 않습니다.", { userId: reviewData.userId });
  }

  // 5. 리뷰 추가
  try {
    const review = await addReview(shopId, reviewData);
    return responseFromReview(review);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw new AlreadyExistsError("리뷰를", "이미 해당 가게에 리뷰를 작성했습니다.", { shopId, userId: reviewData.userId });
      }
    }
    throw error;
  }
};

// 내가 작성한 리뷰 목록 조회
export const listMyReviews = async (userId, cursor) => {
  if (!userId) {
    throw new ValidationError("사용자 ID가 필요합니다.");
  }
  const reviews = await getMyReviewsByUserId(parseInt(userId), cursor ? parseInt(cursor) : undefined);
  return responseMyReviews(reviews);
};