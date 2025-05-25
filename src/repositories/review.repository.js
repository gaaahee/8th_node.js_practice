import { prisma } from "../db.config.js";

// 가게 존재 여부 확인
export const findShopById = async (shopId) => {
  try {
    const shop = await prisma.shop.findUnique({
      where: { id: parseInt(shopId) },
    });
    return shop;
  } catch (error) {
    console.error("Error in findShopById (review.repository):", error);
    throw error;
  }
};

// 리뷰 추가
export const addReview = async (shopId, reviewData) => {
  try {    
    const newReview = await prisma.review.create({
      data: {
        shop_id: parseInt(shopId),
        user_id: parseInt(reviewData.userId),
        rating: reviewData.rating,
        comment: reviewData.comment,
        image_url: reviewData.imageUrl,
      },
      include: {
        shop: {
          select: { id: true }
        }
      }
    });
    return newReview;
  } catch (err) {
    console.error("Error in addReview:", err);
    throw err;
  }
};

// 특정 사용자가 작성한 모든 리뷰 조회
export const getMyReviewsByUserId = async (userId, cursor) => {
  const take = 5;
  try {
    const reviews = await prisma.review.findMany({
      where: {
        user_id: userId,
        ...(cursor && { id: { lt: parseInt(cursor) } }),
      },
      select: {
        id: true,
        comment: true,
        rating: true,
        image_url: true,
        created_at: true,
        shop: { // 리뷰에 해당하는 상점 정보 중 일부만 선택
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: { id: "desc" },
      take: take,
    });
    return reviews;
  } catch (error) {
    console.error("Error in getMyReviewsByUserId:", error);
    throw error;
  }
};