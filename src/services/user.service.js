import { addUser, getUser, getUserPreferencesByUserId } from "../repositories/user.repository.js";
import { bodyToUser, responseFromUser } from "../dtos/user.dto.js";

export const userSignUp = async (body) => {
  const birth = new Date(body.birth);
  const prefer = body.preferences;

  const joinUserData = await addUser(
    bodyToUser(body.email, body.name, body.gender, birth, body.address, body.phoneNumber, body.password, prefer)
  );

  if (joinUserData === null) {
    throw new Error("이미 가입된 이메일입니다.");
  }

  const [user, preferences] = await Promise.all([
    getUser(joinUserData),
    getUserPreferencesByUserId(joinUserData)
  ]);

  return responseFromUser({ user, preferences });
};