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
  /*
    #swagger.summary = '내가 작성한 리뷰 목록 조회 API';
    #swagger.description = '사용자가 작성한 모든 리뷰를 페이지네이션을 통해 조회합니다.';
    #swagger.parameters['userId'] = {
        in: 'path',
        required: true,
        type: 'integer',
        description: '사용자 ID'
    }
    #swagger.parameters['cursor'] = {
        in: 'query',
        required: false,
        type: 'integer',
        description: '페이지네이션을 위한 커서 값(첫 페이지 요청 시에는 생략)'
    }
    #swagger.responses[200] = {
      description: "내가 작성한 리뷰 목록 조회 성공 응답",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "SUCCESS" },
              error: { type: "object", nullable: true, example: null },
              success: {
                type: "object",
                properties: {
                  data: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        reviewId: { type: "integer", description: "리뷰 ID" },
                        shopId: { type: "integer", description: "상점 ID" },
                        shopName: { type: "string", description: "상점 이름" },
                        rating: { type: "number", format: "float", description: "평점" },
                        comment: { type: "string", description: "리뷰 내용" },
                        createdAt: { type: "string", format: "date-time", description: "리뷰 작성일" }
                      }
                    }
                  },
                  pagination: { type: "object", properties: { cursor: { type: "integer", nullable: true, description: "다음 페이지 조회를 위한 커서 값" } }}
                }
              }
            }
          }
        }
      }
    };
    #swagger.responses[400] = {
      description: "잘못된 요청 또는 유효성 검사 실패 시 응답 (예: 잘못된 사용자 ID)",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "FAIL" },
              error: { type: "object", example: { message: "잘못된 사용자 ID입니다." } }
            }
          }
        }
      }
    };
  */
  try {
    const { userId } = req.params;
    const { cursor } = req.query;
    const reviewsData = await listMyReviews(userId, cursor);
    return res.status(StatusCodes.OK).success(reviewsData);
  } catch (error) {
    next(error);
  }
};