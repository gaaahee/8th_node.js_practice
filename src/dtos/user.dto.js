export const bodyToUser = (body) => {
  const birth = new Date(body.birth);

  return {
    email: body.email,
    password: body.password,
    name: body.name,
    gender: body.gender,
    birth,
    address: body.address || "",
    detailAddress: body.detailAddress || "",
    phoneNumber: body.phoneNumber,
    preferences: body.preferences,
  };
};

export const responseFromUser = ({ user, preferences }) => {
  if (!user) {
    throw new Error("사용자 정보를 응답으로 변환하는 중 오류가 발생했습니다: 사용자 정보가 없습니다.");
  }

  return {
    email: user.email,
    name: user.name,
    preferCategory: preferences.map((pref) => pref.name)
  };
};