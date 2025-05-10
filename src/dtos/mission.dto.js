export const bodyToMission = (body) => {
  return {
    description: body.description,
    point: parseInt(body.point),
    dueDate: body.dueDate // 'YYYY-MM-DD'
  };
};

// 특정 가게의 미션 목록 미리보기
export const previewShopMissions = (missions) => {
  return missions.map(mission => ({
    missionId: mission.id,
    description: mission.description,
    point: mission.point,
    // due_date가 Date 객체이므로 YYYY-MM-DD 형식으로 변환
    dueDate: mission.due_date.toISOString().split('T')[0], 
    createdAt: mission.created_at,
  }));
};