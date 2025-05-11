import { prisma } from "../db.config.js";

// User 데이터 삽입
export const addUser = async (data) => {
  try {
    console.log("addUser - data received:", data);
    console.log("addUser - data.email:", data.email);
    // 1. UserLogin 테이블 - 이메일 중복 확인
    const existingUser = await prisma.userLogin.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      return null;
    }

    // 2. UserLogin 테이블에 이메일, 비밀번호 삽입
    const newUserLogin = await prisma.userLogin.create({
      data: {
        email: data.email,
        password: data.password,
      },
    });
    const userId = newUserLogin.id;

    // 3. UserInfo 테이블에 사용자 정보 삽입
    await prisma.userInfo.create({
      data: {
        user_id: userId,
        gender: data.gender,
        birthdate: new Date(data.birth), // 날짜 형식으로 변환
        address: data.address,
        user_name: data.name,
        phone_number: data.phoneNumber,
      },
    });

    // 4. 선호 카테고리가 있으면 UserCategory 테이블에 삽입
    if (data.preferences && data.preferences.length > 0) {
      const preferenceData = data.preferences.map((categoryId) => ({
        user_id: userId,
        category_id: categoryId,
      }));
      await prisma.userCategory.createMany({
        data: preferenceData,
      });
    }

    return userId;

  } catch (err) {
    console.error("Error in addUser:", err);
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  }
};

// 사용자 정보 조회
export const getUser = async (userId) => {
  try {
    const userLogin = await prisma.userLogin.findUnique({
      where: { id: userId },
      include: {
        userInfo: true, // UserInfo 테이블 데이터도 가져옴
      },
    });

    if (!userLogin || !userLogin.userInfo) {
      return null;
    }

    const userInfo = userLogin.userInfo;

    return {
      email: userLogin.email,
      name: userInfo.user_name,
      gender: userInfo.gender,
      birth: userInfo.birthdate,
      address: userInfo.address,
      phoneNumber: userInfo.phone_number,
      point: userInfo.point,
    };
  } catch (err) {
    console.error("Error in getUser:", err);
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  }
};

// 사용자 선호 카테고리 조회
export const getUserPreferencesByUserId = async (userId) => {
  try {
    const userCategories = await prisma.userCategory.findMany({
      where: { user_id: userId },
      include: {
        category: true,
      },
      orderBy: {
        category: { id: 'asc' },
      },
    });

    return userCategories.map(uc => uc.category);
  } catch (err) {
    console.error("Error in getUserPreferencesByUserId:", err);
    throw new Error(`오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`);
  }
};