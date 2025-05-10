import { 
  findMissionById,
  checkExistingMissionLog,
  createMissionLog,
  getInProgressMissionsByUserId
} from "../repositories/mission-log.repository.js";
import { previewInProgressMissions } from "../dtos/mission-log.dto.js";

export const challengeMission = async (missionId, challengeData) => {
  // 1. 미션 존재 여부 확인
  const missionExists = await findMissionById(missionId);
  if (!missionExists) {
    throw new Error("존재하지 않는 미션입니다.");
  }

  // 2. 중복 도전 확인
  const hasExistingLog = await checkExistingMissionLog(
    challengeData.userId, 
    missionId
  );
  
  if (hasExistingLog) {
    throw new Error("이미 도전 중인 미션입니다.");
  }

  // 3. 미션 도전 기록 생성
  const missionLogId = await createMissionLog(
    challengeData.userId,
    missionId
  );

  return { missionLogId };
};

// 내가 진행 중인 미션 목록 조회
export const listInProgressMissions = async (userId, cursorQuery) => {
  const userIdNum = parseInt(userId);
  if (isNaN(userIdNum)) {
    const error = new Error("유효하지 않은 사용자 ID입니다.");
    error.status = 400;
    throw error;
  }

  const cursor = cursorQuery ? parseInt(cursorQuery) : undefined;
  if (cursorQuery && isNaN(cursor)) {
      const error = new Error("유효하지 않은 커서입니다.");
      error.status = 400;
      throw error;
  }

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