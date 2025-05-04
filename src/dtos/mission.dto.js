export const bodyToMission = (body) => ({
  description: body.description,
  point: body.point,
  dueDate: body.dueDate // 'YYYY-MM-DD'
});