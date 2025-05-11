import { addUser, getUser, getUserPreferencesByUserId } from "../repositories/user.repository.js";
import { responseFromUser } from "../dtos/user.dto.js";
import { DuplicateUserEmailError } from "../errors.js";

export const userSignUp = async (userDtoFromController) => {
  const userId = await addUser(userDtoFromController);

  if (userId === null) {
    throw new DuplicateUserEmailError("이미 존재하는 이메일입니다.", userDtoFromController);
  }

  const [user, preferences] = await Promise.all([
    getUser(userId),
    getUserPreferencesByUserId(userId)
  ]);
  return responseFromUser({ user, preferences });
};