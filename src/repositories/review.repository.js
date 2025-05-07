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
        user_id: reviewData.userId,
        rating: reviewData.rating,
        comment: reviewData.comment,
        image_url: reviewData.imageUrl,
      },
    });
    return newReview;
  } catch (err) {
    console.error("Error in addReview:", err);
    throw err;
  }
};