import { 
  findMissionById,
  checkExistingMissionLog,
  createMissionLog
} from "../repositories/mission-log.repository.js";

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