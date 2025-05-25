import { createShop, listShopReviews } from "../services/shop.service.js";
import { StatusCodes } from "http-status-codes";

export const handleCreateShop = async (req, res, next) => {
  /*
    #swagger.summary = '특정 지역에 상점 추가 API';
    #swagger.description = '해당 지역에 새로운 상점을 추가합니다.';
    #swagger.parameters['regionId'] = {
        in: 'path',
        required: true,
        type: 'integer',
        description: '상점을 추가할 지역 ID'
    }
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              name: { type: "string", description: "상점 이름", example: "맛있는 분식집" },
              address: { type: "string", description: "상점 주소", example: "서울시 강남구 테헤란로 123" }
            },
            required: ["name", "address"]
          }
        }
      }
    };
    #swagger.responses[201] = {
      description: "상점 추가 성공 응답 (Created)",
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
                  shopId: { type: "integer", description: "생성된 상점 ID" }
                }
              }
            }
          }
        }
      }
    };
    #swagger.responses[400] = {
      description: "잘못된 요청 또는 유효성 검사 실패",
      content: { "application/json": { schema: { $ref: '#/components/schemas/ErrorResponse400_Default' } } }
    };
    #swagger.responses[404] = {
      description: "존재하지 않는 지역 ID",
      content: { "application/json": { schema: { $ref: '#/components/schemas/ErrorResponse404_RegionNotFound' } } }
    };
    #swagger.responses[500] = {
      description: "서버 내부 오류 발생 시 응답",
      content: { "application/json": { schema: { $ref: '#/components/schemas/ErrorResponse500' } } }
    };
  */
  const regionId = req.params.regionId;
  
  try {
    const shopId = await createShop(regionId, req.body);
    return res.status(StatusCodes.CREATED).success({ shopId });
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
      description: "잘못된 요청 또는 유효성 검사 실패 시 응답",
      content: { "application/json": { schema: { $ref: '#/components/schemas/ErrorResponse400_ListFetchFailed' } } }
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