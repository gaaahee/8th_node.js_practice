import { addUser, getUser, getUserPreferencesByUserId } from "../repositories/user.repository.js";
import { responseFromUser } from "../dtos/user.dto.js";

export const userSignUp = async (userDtoFromController) => {

  // addUser로 넘기기 전 값 체크
  console.log("Service: Data before calling addUser:", userDtoFromController);
  console.log("Service: Email before calling addUser:", userDtoFromController.email);
  console.log("Service: Birth before calling addUser:", userDtoFromController.birth);

  const userId = await addUser(userDtoFromController);

  if (userId === null) {
    throw new Error("이미 가입된 이메일입니다.");
  }

  const [user, preferences] = await Promise.all([
    getUser(userId),
    getUserPreferencesByUserId(userId)
  ]);
  return responseFromUser({ user, preferences });
};