// 공통 에러 응답 스키마

const BaseErrorSchema = {
  type: "object",
  properties: {
    resultType: { type: "string", example: "FAIL" },
    error: {
      type: "object",
      properties: {
        message: { type: "string" }
      },
      required: ["message"]
    }
  },
  required: ["resultType", "error"]
};

// 400 Bad Request
export const ErrorResponse400_Default = {
  ...BaseErrorSchema,
  properties: {
    ...BaseErrorSchema.properties,
    error: {
      ...BaseErrorSchema.properties.error,
      properties: {
        ...BaseErrorSchema.properties.error.properties,
        message: { type: "string", example: "잘못된 요청입니다." }
      }
    }
  }
};

// 400 Bad Request - 리뷰 생성 시 유효성 검사 실패
export const ErrorResponse400_ReviewCreate = {
  ...BaseErrorSchema,
  properties: {
    ...BaseErrorSchema.properties,
    error: {
      ...BaseErrorSchema.properties.error,
      properties: {
        ...BaseErrorSchema.properties.error.properties,
        message: { type: "string", example: "평점은 0점에서 5점 사이여야 합니다." }
      }
    }
  }
};

// 400 Bad Request - 목록 조회 실패 (리뷰, 미션 등)
export const ErrorResponse400_ListFetchFailed = {
    ...BaseErrorSchema,
    properties: {
      ...BaseErrorSchema.properties,
      error: {
        ...BaseErrorSchema.properties.error,
        properties: {
          ...BaseErrorSchema.properties.error.properties,
          message: { type: "string", example: "목록 조회에 실패했습니다." }
        }
      }
    }
  };

// 400 Bad Request - 잘못된 사용자 ID
export const ErrorResponse400_InvalidUserId = {
  ...BaseErrorSchema,
  properties: {
    ...BaseErrorSchema.properties,
    error: {
      ...BaseErrorSchema.properties.error,
      properties: {
        ...BaseErrorSchema.properties.error.properties,
        message: { type: "string", example: "잘못된 사용자 ID입니다." }
      }
    }
  }
};

// 404 Not Found - 상점을 찾을 수 없음
export const ErrorResponse404_ShopNotFound = {
  ...BaseErrorSchema,
  properties: {
    ...BaseErrorSchema.properties,
    error: {
      ...BaseErrorSchema.properties.error,
      properties: {
        ...BaseErrorSchema.properties.error.properties,
        message: { type: "string", example: "해당 상점을 찾을 수 없습니다." }
      }
    }
  }
};

// 404 Not Found - 사용자를 찾을 수 없음
export const ErrorResponse404_UserNotFound = {
  ...BaseErrorSchema,
  properties: {
    ...BaseErrorSchema.properties,
    error: {
      ...BaseErrorSchema.properties.error,
      properties: {
        ...BaseErrorSchema.properties.error.properties,
        message: { type: "string", example: "해당 사용자를 찾을 수 없습니다." }
      }
    }
  }
};

// 500 Internal Server Error - 서버 내부 오류
export const ErrorResponse500 = {
  ...BaseErrorSchema,
  properties: {
    ...BaseErrorSchema.properties,
    error: {
      ...BaseErrorSchema.properties.error,
      properties: {
        ...BaseErrorSchema.properties.error.properties,
        message: { type: "string", example: "서버 내부 오류가 발생했습니다." }
      }
    }
  }
};

// 400 Bad Request - 회원가입 실패 시
export const ErrorResponse400_UserSignUp = {
  type: "object",
  properties: {
    resultType: { type: "string", example: "FAIL" },
    error: {
      type: "object",
      properties: {
        errorCode: { type: "string", example: "U001" },
        reason: { type: "string", example: "입력 값이 올바르지 않습니다." },
        data: { type: "object", example: { field: "email", message: "이미 사용 중인 이메일입니다." } }
      },
      required: ["errorCode", "reason"]
    },
    success: { type: "object", nullable: true, example: null }
  },
  required: ["resultType", "error"]
};

// 404 Not Found - 미션을 찾을 수 없음
export const ErrorResponse404_MissionNotFound = {
  type: "object",
  properties: {
    resultType: { type: "string", example: "FAIL" },
    error: {
      type: "object",
      properties: {
        message: { type: "string", example: "존재하지 않는 미션입니다." },
        details: {
          type: "object",
          properties: {
            missionId: { type: "integer", example: 999 }
          }
        }
      }
    },
    success: { type: "object", nullable: true, example: null }
  }
};

// 409 Conflict - 이미 도전 중인 미션
export const ErrorResponse409_MissionAlreadyChallenged = {
  type: "object",
  properties: {
    resultType: { type: "string", example: "FAIL" },
    error: {
      type: "object",
      properties: {
        message: { type: "string", example: "이미 도전 중인 미션입니다." },
        details: {
          type: "object",
          properties: {
            userId: { type: "integer", example: 1 },
            missionId: { type: "integer", example: 101 }
          }
        }
      }
    },
    success: { type: "object", nullable: true, example: null }
  }
};

// 404 Not Found - 지역을 찾을 수 없음
export const ErrorResponse404_RegionNotFound = {
  ...BaseErrorSchema,
  properties: {
    ...BaseErrorSchema.properties,
    error: {
      ...BaseErrorSchema.properties.error,
      properties: {
        ...BaseErrorSchema.properties.error.properties,
        message: { type: "string", example: "해당 지역을 찾을 수 없습니다." },
        details: {
          type: "object",
          properties: {
            regionId: { type: "integer", example: 999 }
          }
        }
      }
    }
  }
};