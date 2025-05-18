import { StatusCodes } from "http-status-codes";
import { createReview, listMyReviews } from "../services/review.service.js";

export const handleCreateReview = async (req, res, next) => {
  const shopId = req.params.shopId;

  try {
    const review = await createReview(shopId, req.body);
    return res.status(StatusCodes.CREATED).success(review);
  } catch (error) {
    next(error);
  }
};

export const handleListMyReviews = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { cursor } = req.query;
    const reviewsData = await listMyReviews(userId, cursor);
    return res.status(StatusCodes.OK).success(reviewsData);
  } catch (error) {
    next(error);
  }
};