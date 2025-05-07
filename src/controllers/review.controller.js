import { StatusCodes } from "http-status-codes";
import { createReview, listMyReviews } from "../services/review.service.js";

export const handleCreateReview = async (req, res) => {
  const shopId = req.params.shopId;
  
  try {
    const review = await createReview(shopId, req.body);
    return res.status(StatusCodes.CREATED).json({ result: review });
  } catch (error) {
    console.error("리뷰 추가 에러:", error);
    
    if (error.message === "존재하지 않는 가게입니다.") {
      return res.status(StatusCodes.NOT_FOUND).json({ error: error.message });
    } else if (error.message === "이미 리뷰를 작성한 가게입니다.") {
      return res.status(StatusCodes.CONFLICT).json({ error: error.message });
    }
    
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

export const handleListMyReviews = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { cursor } = req.query;
    const reviewsData = await listMyReviews(userId, cursor);
    return res.status(StatusCodes.OK).json(reviewsData);
  } catch (e) {
    console.error("내가 작성한 리뷰 목록 조회 에러:", e);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: e.message || "서버 내부 오류가 발생했습니다." });
  }
};