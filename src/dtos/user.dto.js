export const bodyToUser = (body) => {
  const birth = new Date(body.birth);

  return {
    email: body.email,
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
  // user가 배열로 올 수도 있으니 첫 번째 요소만 사용
  const userInfo = Array.isArray(user) ? user[0] : user;

  return {
    email: userInfo.email,
    name: userInfo.name,
    preferCategory: preferences.map((pref) => pref.name)
  };
};