import { createShop, listShopReviews } from "../services/shop.service.js";
import { StatusCodes } from "http-status-codes";

export const handleCreateShop = async (req, res, next) => {
  const regionId = req.params.regionId;
  
  try {
    const shopId = await createShop(regionId, req.body);
    return res.status(StatusCodes.CREATED).success({ shopId }); // 성공 응답을 res.success()로 처리
  } catch (error) {
    next(error);
  }
};

export const handleListShopReviews = async (req, res, next) => {
  /*
    #swagger.summary = '상점 리뷰 목록 조회 API';
    #swagger.parameters['shopId'] = {
        in: 'path',
        required: true,
        type: 'integer',
        description: '상점 ID'
    }
    #swagger.parameters['cursor'] = {
        in: 'query',
        required: false,
        type: 'integer',
        description: '페이지네이션을 위한 커서 값(첫 페이지 요청 시에는 커서 값 생략)'
    }
    #swagger.responses[200] = {
      description: "상점 리뷰 목록 조회 성공 응답",
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
                        userId: { type: "number" },
                        rating: { type: "number" },
                        comment: { type: "string" },
                        imageUrl: { type: "string", format: "uri" }
                      }
                    }
                  },
                  pagination: { type: "object", properties: { cursor: { type: "number", nullable: true } }}
                }
              }
            }
          }
        }
      }
    };
    #swagger.responses[400] = {
      description: "상점 리뷰 목록 조회 실패 응답",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "FAIL" },
              error: { type: "object", example: { message: "리뷰 목록 조회에 실패했습니다." } }
            }
          }
        }
      }
    };
  */
  try {
    const { shopId } = req.params;
    const { cursor } = req.query;

    const reviews = await listShopReviews(
      shopId, cursor // shopId와 cursor를 shop.service.js로 전달
    );
    res.status(StatusCodes.OK).success(reviews);
  } catch (error) {
    next(error);
  }
};