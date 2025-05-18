import { 
  findMissionById,
  checkExistingMissionLog,
  createMissionLog,
  getInProgressMissionsByUserId
} from "../repositories/mission-log.repository.js";
import { previewInProgressMissions } from "../dtos/mission-log.dto.js";
import { NotFoundError, AlreadyExistsError, ValidationError } from "../errors.js";

// 미션 도전(미션 상태 변경)
export const challengeMission = async (missionIdParam, challengeData) => {
  // 1. 입력값 유효성 검사
  const missionId = parseInt(missionIdParam);
  if (isNaN(missionId)) {
    throw new ValidationError("유효하지 않은 미션 ID 형식입니다.", { missionId: missionIdParam });
  }

  const userId = parseInt(challengeData.userId);
  if (isNaN(userId)) {
    throw new ValidationError("유효하지 않은 사용자 ID 형식입니다.", { userId: challengeData.userId });
  }

  // 2. 미션 존재 여부 확인
  const missionExists = await findMissionById(missionId);
  if (!missionExists) {
    throw new NotFoundError("미션을", "존재하지 않는 미션입니다.", { missionId });
  }

  // 3. 이미 진행 중인 미션인지 확인
  const hasExistingLog = await checkExistingMissionLog(
    userId, // 검증된 userId 사용
    missionId
  );
  
  if (hasExistingLog) {
    throw new AlreadyExistsError("미션이", "이미 도전 중인 미션입니다.", { userId, missionId });
  }

  // 4. 미션 로그 생성
  const missionLogId = await createMissionLog(
    userId,
    missionId
  );

  return { missionLogId };
};

// 내가 진행 중인 미션 목록 조회
export const listInProgressMissions = async (userId, cursorQuery) => {
  const userIdNum = parseInt(userId);

  // 유효한 사용자 ID인지 확인
  if (isNaN(userIdNum)) {
    throw new ValidationError("유효하지 않은 사용자 ID 형식입니다.", { userId });
  }

  // 커서 유효성 검사
  const cursor = cursorQuery ? parseInt(cursorQuery) : undefined;
  if (cursorQuery && isNaN(cursor)) {
      throw new ValidationError("유효하지 않은 커서 형식입니다.", { cursor: cursorQuery });
  }

  // 진행 중인 미션 목록 조회
  const takeCount = 10; // Repository의 take 값과 일치
  const missionLogs = await getInProgressMissionsByUserId(userIdNum, cursor);

  const hasNext = missionLogs.length === takeCount;
  const nextCursor = hasNext && missionLogs.length > 0 ? missionLogs[missionLogs.length - 1].id : null;

  return {
      missions: previewInProgressMissions(missionLogs),
      hasNext: hasNext,
      nextCursor: nextCursor,
  };
};