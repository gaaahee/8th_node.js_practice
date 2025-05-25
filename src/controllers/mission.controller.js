import { StatusCodes } from "http-status-codes";
import { createMission, listMissionsForShop } from "../services/mission.service.js";

export const handleCreateMission = async (req, res, next) => {
  /*
    #swagger.summary = '상점에 새로운 미션 등록 API';
    #swagger.description = '해당 상점에 새로운 미션을 추가합니다.';
    #swagger.parameters['shopId'] = {
        in: 'path',
        required: true,
        type: 'integer',
        description: '미션을 등록할 상점 ID'
    }
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              description: { type: "string", description: "미션 내용", example: "음료 2잔 이상 주문 시 굿즈 증정" },
              point: { type: "integer", description: "미션 완료 시 지급 포인트", example: 100 },
              deadline: { type: "string", format: "date", description: "미션 마감 기한", example: "2025-12-31" }
            },
            required: ["description", "point", "deadline"]
          }
        }
      }
    };
    #swagger.responses[201] = {
      description: "미션 등록 성공 응답 (Created)",
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
                  missionId: { type: "integer", description: "생성된 미션 ID" }
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
      description: "존재하지 않는 상점 ID",
      content: { "application/json": { schema: { $ref: '#/components/schemas/ErrorResponse404_ShopNotFound' } } }
    };
    #swagger.responses[500] = {
      description: "서버 내부 오류 발생 시 응답",
      content: { "application/json": { schema: { $ref: '#/components/schemas/ErrorResponse500' } } }
    };
  */
  const shopId = req.params.shopId;
  try {
    const missionId = await createMission(shopId, req.body);
    return res.status(StatusCodes.CREATED).success({ missionId });
  } catch (error) {
    next(error);
  }
};

// 특정 상점의 미션 목록 조회
export const handleListMissionsForShop = async (req, res, next) => {
  /*
    #swagger.summary = '특정 상점의 미션 목록 조회 API';
    #swagger.description = '특정 상점에 등록된 모든 미션을 페이지네이션을 통해 조회합니다.';
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
        description: '페이지네이션을 위한 커서 값(첫 페이지 요청 시에는 생략)'
    }
    #swagger.responses[200] = {
      description: "상점 미션 목록 조회 성공 응답",
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
                        missionId: { type: "integer", description: "미션 ID" },
                        shopId: { type: "integer", description: "상점 ID" },
                        description: { type: "string", description: "미션 내용" },
                        point: { type: "integer", description: "미션 완료 시 지급되는 보상" },
                        deadline: { type: "string", format: "date-time", description: "미션 마감 기한" },
                        createdAt: { type: "string", format: "date-time", description: "미션 생성일" }
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
      description: "잘못된 요청 또는 유효성 검사 실패 시 응답 (예: 잘못된 상점 ID, 조회 실패)",
      content: { "application/json": { schema: { $ref: '#/components/schemas/ErrorResponse400_ListFetchFailed' } } }
    };
  */
  try {
    const { shopId } = req.params;
    const { cursor } = req.query;

    const missionData = await listMissionsForShop(shopId, cursor);
    return res.status(StatusCodes.OK).success(missionData);
  } catch (error) {
    next(error);
  }
};