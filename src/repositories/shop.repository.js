import { prisma } from "../db.config.js";

// 지역이 존재하는지 확인
export const findRegionById = async (regionId) => {
  try {
    const region = await prisma.region.findUnique({
      where: { id: regionId },
    });
    return region;
  } catch (error) {
    console.error("Error in findRegionById:", error);
    throw error;
  }
};

// 상점 추가
export const addShop = async (regionId, shopData) => {
  try {
    const newShop = await prisma.shop.create({
      data: {
        name: shopData.name,
        region_id: regionId,
        address: shopData.address,
      },
    });
    return newShop.id;
  } catch (error) {
    console.error("Error in addShop:", error);
    throw error;
  }
};

// 상점 ID로 상점 정보 조회
export const findShopById = async (shopId) => {
  try {
    const shop = await prisma.shop.findUnique({
      where: { id: parseInt(shopId) },
    });
    return shop;
  } catch (error) {
    console.error("Error in findShopById (shop.repository):", error);
    throw error;
  }
};

// 특정 상점의 모든 리뷰 조회
export const getAllShopReviews = async (shopId, cursor) => {
  const take = 5; // 한 번에 가져올 리뷰 개수
  try {
    const reviews = await prisma.review.findMany({
      where: {
        shop_id: shopId,
        ...(cursor && { id: { lt: cursor } }), // cursor가 있으면 해당 id보다 작은 (이전) 리뷰들을 가져옴
      },
      select: {
        id: true,
        comment: true,
        shop_id: true,
        user_id: true,
        rating: true,
        image_url: true,
        created_at: true,
      },
      orderBy: { id: "desc" }, // 최신 리뷰 순(id가 큰 순서)
      take: take,
    });
    return reviews;
  } catch (error) {
    console.error("Error in getAllShopReviews:", error);
    throw error;
  }
};