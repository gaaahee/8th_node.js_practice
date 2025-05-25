import { StatusCodes } from "http-status-codes";
import { challengeMission, listInProgressMissions } from "../services/mission-log.service.js";
import { bodyToMissionChallenge } from "../dtos/mission-log.dto.js";

export const handleChallengeMission = async (req, res, next) => {
  /*
    #swagger.summary = '미션 도전하기 API';
    #swagger.description = '사용자가 미션에 도전하여 진행 상태로 변경합니다.';
    #swagger.parameters['missionId'] = {
        in: 'path',
        required: true,
        type: 'integer',
        description: '도전할 미션 ID'
    }
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              userId: { type: "integer", description: "미션에 도전하는 사용자 ID" }
            },
            required: ["userId"]
          }
        }
      }
    };
    #swagger.responses[201] = {
      description: "미션 도전 성공 응답 (Created)",
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
                  missionLogId: { type: "integer", description: "생성된 미션 로그 ID" }
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
      description: "존재하지 않는 미션 ID",
      content: { "application/json": { schema: { $ref: '#/components/schemas/ErrorResponse404_MissionNotFound' } } }
    };
    #swagger.responses[409] = {
      description: "이미 도전 중인 미션",
      content: { "application/json": { schema: { $ref: '#/components/schemas/ErrorResponse409_MissionAlreadyChallenged' } } }
    };
    #swagger.responses[500] = {
      description: "서버 내부 오류 발생 시 응답",
      content: { "application/json": { schema: { $ref: '#/components/schemas/ErrorResponse500' } } }
    };
  */
  const missionId = req.params.missionId;
  try {
    const result = await challengeMission(
      missionId, 
      bodyToMissionChallenge(req.body)
    );
    return res.status(StatusCodes.CREATED).success(result);
  } catch (error) {
    next(error);
  }
};

// 내가 진행 중인 미션 목록 조회
export const handleListInProgressMissions = async (req, res, next) => {
  /*
    #swagger.summary = '내가 진행 중인 미션 목록 조회 API';
    #swagger.description = '사용자가 현재 도전 중인 미션들의 목록을 페이지네이션을 통해 조회합니다.';
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
      description: "진행 중인 미션 목록 조회 성공 응답",
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
                        missionLogId: { type: "integer", description: "미션 로그 ID" },
                        missionId: { type: "integer", description: "미션 ID" },
                        description: { type: "string", description: "미션 내용" },
                        shopName: { type: "string", description: "미션이 속한 상점 이름" },
                        point: { type: "integer", description: "미션 보상" },
                        deadline: { type: "string", format: "date-time", description: "미션 마감일" },
                        status: { type: "string", example: "inProgress", description: "미션 진행 상태" }
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
      content: { "application/json": { schema: { $ref: '#/components/schemas/ErrorResponse400_InvalidUserId' } } }
    };
  */
  try {
    const { userId } = req.params;
    const { cursor } = req.query;

    const result = await listInProgressMissions(userId, cursor);
    return res.status(StatusCodes.OK).success(result);
  } catch (error) {
    next(error);
  }
};