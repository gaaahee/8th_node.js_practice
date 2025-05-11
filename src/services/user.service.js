import { addUser, getUser, getUserPreferencesByUserId } from "../repositories/user.repository.js";
import { responseFromUser } from "../dtos/user.dto.js";
import { DuplicateUserEmailError, NotFoundError } from "../errors.js";

export const userSignUp = async (userDtoFromController) => {
  const userId = await addUser(userDtoFromController);

  if (userId === null) {
    throw new DuplicateUserEmailError("이미 가입된 이메일입니다.", { email: userDtoFromController.email });
  }

  const [user, preferences] = await Promise.all([
    getUser(userId),
    getUserPreferencesByUserId(userId)
  ]);

  if (!user) {
    throw new NotFoundError("사용자 정보를 찾을 수 없습니다.", { userId });
  }
  return responseFromUser({ user, preferences });
};