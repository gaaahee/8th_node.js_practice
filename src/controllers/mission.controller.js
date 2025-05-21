import { StatusCodes } from "http-status-codes";
import { createMission, listMissionsForShop } from "../services/mission.service.js";

export const handleCreateMission = async (req, res, next) => {
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
      description: "잘못된 요청 또는 유효성 검사 실패 시 응답 (예: 잘못된 상점 ID)",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "FAIL" },
              error: { type: "object", example: { message: "미션 목록 조회에 실패했습니다." } }
            }
          }
        }
      }
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