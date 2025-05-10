export const bodyToMissionChallenge = (body) => ({
  userId: body.userId
});

// 진행 중인 미션 목록 미리보기
export const previewInProgressMissions = (missionLogs) => {
  return missionLogs.map(log => ({
    missionLogId: log.id,
    missionId: log.mission.id,
    missionDescription: log.mission.description,
    missionPoint: log.mission.point,
    // due_date가 Date 객체이므로 YYYY-MM-DD 형식으로 변환
    missionDueDate: log.mission.due_date.toISOString().split('T')[0], 
    shopId: log.mission.shop.id,
    shopName: log.mission.shop.name,
    // challengedAt은 missionLog의 생성 시간
    challengedAt: log.created_at.toISOString().split('T')[0], 
  }));
};